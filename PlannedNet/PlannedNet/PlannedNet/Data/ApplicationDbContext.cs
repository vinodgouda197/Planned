using Microsoft.EntityFrameworkCore;
using PlannedNet.Models;

namespace PlannedProj.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<User> Users => Set<User>();
    }
}