using jp_backend.Database.Entities;

namespace jp_backend.Models.Create
{
    public class CreateParkAnimalModel
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string Gender { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }

        // Fremdverweise der Klasse Park-Tier
        public Guid? HabitatId { get; set; }
        public Guid? DinosaurTypeId { get; set; }
    }
}
