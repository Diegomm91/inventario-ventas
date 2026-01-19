using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventarioVentasBackend.Data;
using InventarioVentasBackend.Models;

namespace InventarioVentasBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Sales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sale>>> GetSales()
        {
            return await _context.Sales.Include(s => s.Product).ToListAsync();
        }

        // POST: api/Sales
        [HttpPost]
        public async Task<ActionResult<Sale>> PostSale(Sale sale)
        {
            var product = await _context.Products.FindAsync(sale.ProductId);
            
            if (product == null)
            {
                return BadRequest("Producto no encontrado.");
            }

            if (product.Stock < sale.Quantity)
            {
                return BadRequest("Stock insuficiente.");
            }

            // Descontar stock
            product.Stock -= sale.Quantity;
            
            // Calcular precio total si no viene dado
            if (sale.TotalPrice <= 0)
            {
                sale.TotalPrice = product.Price * sale.Quantity;
            }

            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSales", new { id = sale.Id }, sale);
        }
    }
}
