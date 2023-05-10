using jp_backend.Database.Entities;

namespace jp_backend.Models.Details
{
    public class ParkAnimalDetails
    {
        public Guid Id { get; set; }
        public int AnimalNumber { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string Gender { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }

        // Fremdverweise der Klasse Park-Tier
        public DinosaurHabitatDetails? Habitat { get; set; }
        public DinosaurDetails? DinosaurType { get; set; }
    }
}
