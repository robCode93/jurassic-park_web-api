using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class DinosaurClass
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int? DiscoveryYear { get; set; }
    }
}
