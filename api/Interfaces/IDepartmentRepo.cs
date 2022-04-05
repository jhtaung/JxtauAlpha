using api.DTOs;
using api.Helpers;

namespace api.Interfaces
{
    public interface IDepartmentRepo
    {
        Task<PagedList<DepartmentDto>> GetAsync(DepartmentParams departmentParams);
    }
}