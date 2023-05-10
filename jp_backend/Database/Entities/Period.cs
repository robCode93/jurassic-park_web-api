using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class Period
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public double AgeStartInMillions { get; set; }
        public double AgeEndInMillions { get; set; }
    }
}
