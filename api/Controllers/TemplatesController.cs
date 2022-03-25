using api.DTOs;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TemplatesController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public TemplatesController(IUnitOfWork unitOfWork, IMapper mapper) 
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TemplateDto>>> Get([FromQuery]TemplateParams templateParams)
        {
            var appeals = await _unitOfWork.TemplateRepo.GetAsync(templateParams);
            Response.AddPaginationHeader(appeals.CurrentPage, appeals.PageSize, appeals.TotalCount, appeals.TotalPages);
            return Ok(appeals);
        }

        [HttpPut]
        public async Task<ActionResult> Update(TemplateUpdateDto templateUpdateDto)
        {
            var template = await _unitOfWork.TemplateRepo.GetTemplateByIdAsync(templateUpdateDto.Id);

            _mapper.Map(templateUpdateDto, template);

            template.CreateUser = "MPIDOM\\jhtaung";
            template.UpdateUser = "MPIDOM\\jhtaung";
            template.CreateDate = DateTime.Now;
            template.UpdateDate = DateTime.Now;
            
            _unitOfWork.TemplateRepo.Update(template);
            if (await _unitOfWork.Complete()) return NoContent();

            return BadRequest("Failed to update template.");
        }
    }
}