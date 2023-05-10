using jp_backend.Database.Entities;

namespace jp_backend.Models.Create
{
    public class CreateDinosaurLocalityModel
    {
        public string Name { get; set; } = String.Empty;
        public string? Description { get; set; }
        public string? Country { get; set; }

        // Fremdverweise der Klasse Fundort
        public Guid? ThumbnailId { get; set; }
    }
}
