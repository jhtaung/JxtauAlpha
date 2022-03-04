using api.DTOs;
using api.Entities;
using AutoMapper;

namespace api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Appeal, AppealDto>();
            // CreateMap<Claim, ClaimDto>();
        }
    }
}