using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class DinosaurHabitat
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;    
        public string? Description { get; set; }
        public string Coordinates { get; set; } = string.Empty;
        public double? SizeInSquareKilometers { get; set; }
        public IList<Employee> Employees { get; set; } = new List<Employee>();
    }
}
