using api.DTOs;
using api.Helpers;

namespace api.Interfaces
{
    public interface IAppealRepo
    {
        Task<PagedList<AppealsListDto>> GetListAsync(AppealParams appealParams);
        Task<PagedList<UspGetAppealsDto>> GetSprocAsync(AppealParams appealParams);
    }
}