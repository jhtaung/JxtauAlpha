using api.DTOs;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class AppealsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public AppealsController(IUnitOfWork unitOfWork) 
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppealListDto>>> Get([FromQuery]AppealParams appealParams)
        {
            var appeals = await _unitOfWork.AppealRepo.GetAsync(appealParams);
            Response.AddPaginationHeader(appeals.CurrentPage, appeals.PageSize, appeals.TotalCount, appeals.TotalPages);
            return Ok(appeals);
        }

        [HttpGet("List")]
        public async Task<ActionResult<IEnumerable<AppealListDto>>> GetList([FromQuery]AppealParams appealParams)
        {
            var appeals = await _unitOfWork.AppealRepo.GetListAsync(appealParams);
            Response.AddPaginationHeader(appeals.CurrentPage, appeals.PageSize, appeals.TotalCount, appeals.TotalPages);
            return Ok(appeals);
        }

        [HttpGet("Sproc")]
        public async Task<ActionResult<IEnumerable<UspGetAppealsDto>>> GetSproc([FromQuery]AppealParams appealParams)
        {
            var appeals = await _unitOfWork.AppealRepo.GetSprocAsync(appealParams);
            Response.AddPaginationHeader(appeals.CurrentPage, appeals.PageSize, appeals.TotalCount, appeals.TotalPages);
            return Ok(appeals);
        }
    }
}