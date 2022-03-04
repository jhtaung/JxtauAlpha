using api.DTOs;
using api.Helpers;

namespace api.Interfaces
{
    public interface IAppealRepo
    {
        Task<PagedList<AppealDto>> GetAppealAsync(AppealParams appealParams);
    }
}