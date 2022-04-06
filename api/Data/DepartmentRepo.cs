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

            // map order name from dto to entity
            string order = departmentParams.OrderBy;
            string[] orderArr = order.Split(",");
            List<string> columns = new List<string>();
            foreach (string x in orderArr) {
                string[] xArr = x.Split(" ");
                string column = xArr[0].ToLower();
                switch (column) {
                    case "id": column = "DepartmentId"; break;
                    case "name": column = "DepartmentName"; break;
                    case "code": column = "DepartmentCode"; break;
                    default: break;
                }
                column = xArr.Length > 1 ? column + " " + xArr[1].ToLower() : column.Trim();
                columns.Add(column);
            }
            string orderBy = String.Join(",", columns.ToArray());

            // sort
            var sorthelper = new SortHelper<Department>();
            query = sorthelper.ApplySort(query, orderBy);

            return await PagedList<DepartmentDto>.CreateAsync(
                query.ProjectTo<DepartmentDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                departmentParams.PageNumber, 
                departmentParams.PageSize
            );
        }
    }
}