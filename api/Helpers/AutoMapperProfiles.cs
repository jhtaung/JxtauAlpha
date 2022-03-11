using api.DTOs;
using api.Entities;
using AutoMapper;

namespace api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppealsListDto, AppealsListDto>();

            CreateMap<UspGetAppeals, UspGetAppealsDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.AppealId))
                .ForMember(d => d.Dept, o => o.MapFrom(s => s.DepartmentCode))
                .ForMember(d => d.Status, o => o.MapFrom(s => s.AppealStatusTypeDescription));
        }
    }
}

    /*
    CreateMap<Appeal, AppealDto>()
        .ForMember(d => d.Id, o => o.MapFrom(s => s.AppealId))
        .ForMember(d => d.Dept, o => o.MapFrom(s => s.Department.DepartmentCode))
        .ForMember(d => d.AppealContacts, 
            o => o.MapFrom(s => s.AppealContacts.Where(x => x.ContactTypeId == 1)));
    CreateMap<AppealContact, AppealContactDto>();

    CreateMap<AppealContact, AppealDto>()
        .ForMember(d => d.FirstName, o => o.MapFrom(x => x.FirstName));

    CreateMap<Appeal, AppealDto>().ConvertUsing(src => AppealConvert(src));

    CreateMap<Appeal, AppealDto>()
        .ConvertUsing(src => src.AppealContacts.Select(
            x => new AppealDto {
                Id = src.AppealId,
                Rap = src.Rap,
                Dept = src.Department.DepartmentCode,
                Mpid = src.Mpid,
                FirstName = x.FirstName,
                LastName = x.LastName
            })
            .FirstOrDefault();
            // .DefaultIfEmpty(new AppealDto() { Id = src.AppealId })
            // .First());

    public class AppealDtoConverter : IValueConverter<Appeal, AppealDto>
    {
        public AppealDto AppealConvert(Appeal src) {
            var appeal = src.AppealContacts.Select(
                x => new AppealDto {
                    Id = src.AppealId,
                    Rap = src.Rap,
                    Dept = src.Department.DepartmentCode,
                    Mpid = src.Mpid
                    // FirstName = x.FirstName,
                    // LastName = x.LastName
                })
                .FirstOrDefault();

            if (appeal == null) {
                return new AppealDto() { Id = 20 };
            }

            return appeal;
        }

        public AppealDto Convert(Appeal src, ResolutionContext context)
        {
            var appeal = src.AppealContacts.Select(
                x => new AppealDto {
                    Id = src.AppealId,
                    Rap = src.Rap,
                    Dept = src.Department.DepartmentCode,
                    Mpid = src.Mpid,
                    FirstName = x.FirstName,
                    LastName = x.LastName
                })
                .FirstOrDefault();

            if (appeal == null) {
                return new AppealDto();
            }

            return appeal;
        }
    }
    */