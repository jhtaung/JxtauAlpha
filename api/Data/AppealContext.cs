using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class AppealContext : DbContext
    {
        public AppealContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Appeal> Appeal { get; set; } = null!;
    }
}