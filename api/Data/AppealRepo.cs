using api.DTOs;
using api.Helpers;
using api.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class AppealRepo : IAppealRepo
    {
        private readonly AppealContext _context;
        private readonly IMapper _mapper;
        public AppealRepo(AppealContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PagedList<AppealsDto>> GetAsync(AppealParams appealParams)
        {
            var query = _context.Appeals.AsQueryable();

            query = query.Where(x => x.AppealId == appealParams.Id);

            query = query.OrderByDescending(x => x.AppealId);

            return await PagedList<AppealsDto>.CreateAsync(
                query.ProjectTo<AppealsDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                appealParams.PageNumber, 
                appealParams.PageSize
            );
        }

        public async Task<PagedList<AppealsListDto>> GetListAsync(AppealParams appealParams)
        {
            /*
            // .Where(x => x.AppealId == appeal.AppealId)
            // .OrderByDescending(x => x.AppealStatusLogId)
            // .Take(1)
            join status in _context.AppealStatusLogs 
                on appeal.AppealId equals status.AppealId
            join statusType in _context.AppealStatusTypes
                on status.AppealStatusTypeId equals statusType.AppealStatusTypeId
            */

            var query = 
                from appeal in _context.Appeals
                let status = _context.AppealStatusLogs
                    .Where(x => x.AppealId == appeal.AppealId)
                    .OrderByDescending(x => x.AppealStatusLogId)
                    .FirstOrDefault()
                join statusType in _context.AppealStatusTypes
                    on status.AppealStatusTypeId equals statusType.AppealStatusTypeId
                join department in _context.Departments
                    on appeal.DepartmentId equals department.DepartmentId
                join meeting in _context.MeetingSchedules 
                    on status.MeetingScheduleId equals meeting.MeetingScheduleId
                join contacts in _context.AppealContacts.Where(x => x.ContactTypeId == 1)
                    on appeal.AppealId equals contacts.AppealId into leftContacts
                from contact in leftContacts.DefaultIfEmpty()
                orderby appeal.AppealId descending
                select new AppealsListDto
                {
                    Id = appeal.AppealId,
                    Rap = appeal.Rap,
                    Dept = department.DepartmentCode,
                    Mpid = appeal.Mpid,
                    FirstName = contact.FirstName,
                    LastName = contact.LastName,
                    /*
                    Meeting = (meeting.MeetingTime == null 
                        ? meeting.MeetingDate 
                        : meeting.MeetingDate.Add(meeting.MeetingTime.Value.TimeOfDay)
                    ).ToString(),
                    */
                    Meeting = (meeting.MeetingTime ?? meeting.MeetingDate),
                    Status = statusType.AppealStatusTypeDescription,
                    Notes = status.Notes,
                    StatusUpdateUser = status.UpdateUser,
                    StatusUpdateDate = status.UpdateDate,
                    ReceivedDate = appeal.AppealReceivedDate
                };
            
            query = query.AsQueryable();

            if (appealParams.Rap != null) { 
                query = query.Where(x => x.Rap == appealParams.Rap); 
            }

            return await PagedList<AppealsListDto>.CreateAsync(
                query.ProjectTo<AppealsListDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                appealParams.PageNumber, 
                appealParams.PageSize
            );
        }

        public async Task<PagedList<UspGetAppealsDto>> GetSprocAsync(AppealParams appealParams)
        {
            string deptParam = appealParams.DepartmentId == null ? "null" : '"' + appealParams.DepartmentId + '"';
            string statusParam = appealParams.Status == 0 ? "null" : appealParams.Status.ToString();
            string rapParam = appealParams.Rap == true ? "1" : "0";

            var result = await _context.Usp_GetAppeals
                .FromSqlRaw($"exec usp_GetAppeals {deptParam}, {statusParam}, {rapParam}")
                .ToListAsync();

            var count = result.Count();
            var pageNumber = appealParams.PageNumber;
            var pageSize = appealParams.PageSize;

            var appeals = result
                .OrderByDescending(x => x.AppealId)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize);
            
            List<UspGetAppealsDto> appealList = new List<UspGetAppealsDto>();
            foreach (var item in appeals) {
                appealList.Add(_mapper.Map<UspGetAppealsDto>(item));
            }

            return new PagedList<UspGetAppealsDto>(appealList, count, pageNumber, pageSize);
        }

        /*
            --
            var query = result.AsQueryable();
            query = query.OrderByDescending(x => x.AppealId);
            
            return await PagedList<AppealListDto>.CreateAsync(
                query.ProjectTo<AppealListDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                appealParams.PageNumber, 
                appealParams.PageSize
            );
            --

            var query = 
                from appeal in _context.Appeals
                join status in 
                    _context.AppealStatusLog
                        .Where(x => x.AppealId == appeal.AppealId)
                        .OrderByDescending(x => x.AppealStatusLogId)
                        .Take(1)
                    on appeal.AppealId = status.AppealId
                join department in _context.Departments
                    on appeal.DepartmentId equals department.DepartmentId
                join contact in _context.AppealContacts 
                    on appeal.AppealId equals contact.AppealId into leftContacts
                from lc in leftContacts.DefaultIfEmpty()
                select new AppealListDto
                {
                    Id = appeal.AppealId,
                    Rap = appeal.Rap,
                    Dept = department.DepartmentCode,
                    FirstName = lc.FirstName,
                    LastName = lc.LastName,
                    Meeting = "",
                    Status = "",
                    Notes = "",
                    StatusUpdateUser = ""
                };

            query = query.AsQueryable();

            --
            var query = _context.Appeals.AsQueryable();

            if (appealParams.Rap != null) { 
                query = query.Where(x => x.Rap == appealParams.Rap); 
            }

            query = query.OrderByDescending(x => x.AppealId);

            return await PagedList<AppealDto>.CreateAsync(
                query.ProjectTo<AppealDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                appealParams.PageNumber, 
                appealParams.PageSize
            );
        */
    }
}