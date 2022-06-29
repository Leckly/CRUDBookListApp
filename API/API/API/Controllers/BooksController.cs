using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private readonly ApiDbContext apiDbContext;
        public BooksController(ApiDbContext apiDbContext)
        {
            this.apiDbContext = apiDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await apiDbContext.Books.ToListAsync();

            return Ok(books);
        }


        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book bookRequest)
        {
            bookRequest.Id = Guid.NewGuid();

            await apiDbContext.Books.AddAsync(bookRequest);
            await apiDbContext.SaveChangesAsync();
            
            return Ok(bookRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBook([FromRoute]Guid id)
        {
            var book = await apiDbContext.Books.FirstOrDefaultAsync(x => x.Id == id);

            if(book == null) return NotFound();

            return Ok(book);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateBook([FromRoute] Guid id, Book updatedBook)
        {
            var book = await apiDbContext.Books.FindAsync(id);

            if (book == null) return NotFound();
            book.Name = updatedBook.Name;
            book.Author = updatedBook.Author;
            book.NumberOfPages = updatedBook.NumberOfPages;
            book.Price = updatedBook.Price;
            book.ProductionYear = updatedBook.ProductionYear;

            await apiDbContext.SaveChangesAsync();

            return Ok(book);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteBook([FromRoute] Guid id)
        {
            var book = await apiDbContext.Books.FindAsync(id);

            if (book == null) return NotFound();

            apiDbContext.Books.Remove(book);
            await apiDbContext.SaveChangesAsync();

            return Ok(book);
        }
    }
}
