using api.DTOs;
using api.Entities;
using api.Helpers;

namespace api.Interfaces
{
    public interface ITemplateRepo
    {
        Task<PagedList<TemplateDto>> GetAsync(TemplateParams templateParams);
        Task<Template>GetTemplateByIdAsync(int Id);
        void Update(Template template);
    }
}