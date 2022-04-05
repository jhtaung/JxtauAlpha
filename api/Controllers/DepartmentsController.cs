using api.DTOs;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class DepartmentsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public DepartmentsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DepartmentDto>>> Get([FromQuery]DepartmentParams departmentParams)
        {
            var departments = await _unitOfWork.DepartmentRepo.GetAsync(departmentParams);
            Response.AddPaginationHeader(
                departments.CurrentPage, 
                departments.PageSize, 
                departments.TotalCount, 
                departments.TotalPages
            );
            return Ok(departments);
        }
    }
}