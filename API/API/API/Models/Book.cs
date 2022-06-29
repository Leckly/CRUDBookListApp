namespace API.Models
{
    public class Book
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public int NumberOfPages { get; set; }
        public decimal Price { get; set; }
        public int ProductionYear { get; set; }

    }
}
