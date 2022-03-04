using api.Data;
using api.Helpers;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Extensions
{
    public static class ApplicationServiceExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            services.AddDbContext<AppealContext>(options => {
                options.UseSqlServer(config.GetConnectionString("AppealConnection"));
            });
            // services.AddDbContext<PlanDataContext>(options => { options.UseSqlServer(config.GetConnectionString("PlanDataConnection")); });

            return services;
        }
    }
}