using api.DTOs;
using api.Entities;
using api.Helpers;
using api.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class TemplateRepo : ITemplateRepo
    {
        private readonly AppealContext _context;
        private readonly IMapper _mapper;
        public TemplateRepo(AppealContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PagedList<TemplateDto>> GetAsync(TemplateParams templatesParams)
        {
            var query = _context.Templates.AsQueryable();

            if (templatesParams.Id != null) {
                query = query.Where(x => x.TemplateId == templatesParams.Id);
            }

            query = query.OrderByDescending(x => x.TemplateId);

            return await PagedList<TemplateDto>.CreateAsync(
                query.ProjectTo<TemplateDto>(_mapper.ConfigurationProvider).AsNoTracking(),
                templatesParams.PageNumber, 
                templatesParams.PageSize
            );
        }

        public async Task<Template> GetTemplateByIdAsync(int Id)
        {
            var template = await _context.Templates.FindAsync(Id);
            return template!;
        }

        public void Update(Template template)
        {
            _context.Entry(template).State = EntityState.Modified;
        }
    }
}