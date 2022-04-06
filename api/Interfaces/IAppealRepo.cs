using api.DTOs;
using api.Helpers;

namespace api.Interfaces
{
    public interface IAppealRepo
    {
        Task<PagedList<AppealDto>> GetAsync(AppealParams appealParams);
        Task<PagedList<AppealListDto>> GetListAsync(AppealParams appealParams);
        Task<PagedList<UspGetAppealsDto>> GetSprocAsync(AppealParams appealParams);
    }
}