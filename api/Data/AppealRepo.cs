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

        public async Task<PagedList<AppealDto>> GetAppealAsync(AppealParams appealParams)
        {
            var query = _context.Appeal.AsQueryable();

            if (appealParams.Rap != null) { 
                query = query.Where(x => x.Rap == appealParams.Rap); 
            }

            query = query.OrderByDescending(x => x.AppealId);

            return await PagedList<AppealDto>.CreateAsync(
                query.ProjectTo<AppealDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                appealParams.PageNumber, 
                appealParams.PageSize
            );
        }
    }
}