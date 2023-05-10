using jp_backend.Database.Entities;

namespace jp_backend.Models.Update
{
    public class UpdateParkAnimalModel
    {
        public string? Name { get; set; } = string.Empty;
        public string? Gender { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime? Birthdate { get; set; }

        // Fremdverweise der Klasse Park-Tier
        public Guid? HabitatId { get; set; }
        public Guid? DinosaurTypeId { get; set; }
    }
}
