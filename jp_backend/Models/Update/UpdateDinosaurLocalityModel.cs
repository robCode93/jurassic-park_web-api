using jp_backend.Database.Entities;

namespace jp_backend.Models.Update
{
    public class UpdateDinosaurLocalityModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Country { get; set; }

        // Fremdverweise der Klasse Fundort
        public Guid? ThumbnailId { get; set; }
    }
}
