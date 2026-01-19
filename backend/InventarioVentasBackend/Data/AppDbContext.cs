using Microsoft.EntityFrameworkCore;
using InventarioVentasBackend.Models;

namespace InventarioVentasBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Configuraciones adicionales si son necesarias
            modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(18, 2);
            modelBuilder.Entity<Sale>().Property(s => s.TotalPrice).HasPrecision(18, 2);
        }
    }
}
