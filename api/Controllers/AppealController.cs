using api.DTOs;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class AppealController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public AppealController(IUnitOfWork unitOfWork) 
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppealDto>>> GetAppeals([FromQuery]AppealParams appealParams)
        {
            var appeals = await _unitOfWork.AppealRepo.GetAppealAsync(appealParams);
            Response.AddPaginationHeader(appeals.CurrentPage, appeals.PageSize, appeals.TotalCount, appeals.TotalPages);
            return Ok(appeals);
        }
    }
}