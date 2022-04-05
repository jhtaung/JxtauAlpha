using api.DTOs;
using api.Entities;
using api.Helpers;
using api.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DepartmentRepo : IDepartmentRepo
    {
        private readonly AppealContext _context;
        private readonly IMapper _mapper;
        public DepartmentRepo(AppealContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PagedList<DepartmentDto>> GetAsync(DepartmentParams departmentParams)
        {
            var query = _context.Departments.AsQueryable();
            var sorthelper = new SortHelper<Department>();
            query = sorthelper.ApplySort(query, departmentParams.OrderBy);

            return await PagedList<DepartmentDto>.CreateAsync(
                query.ProjectTo<DepartmentDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                departmentParams.PageNumber, 
                departmentParams.PageSize
            );
        }
    }
}