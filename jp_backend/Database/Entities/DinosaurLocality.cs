using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class DinosaurLocality
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string? Description { get; set; }
        public string? Country { get; set; }

        // Fremdverweise der Klasse Fundort
        public FileReference? Thumbnail { get; set; }
    }
}
