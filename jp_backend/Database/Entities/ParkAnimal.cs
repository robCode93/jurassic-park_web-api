using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class ParkAnimal
    {
        [Key]
        public Guid Id { get; set; }
        public int AnimalNumber { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }

        // Fremdverweise der Klasse Park-Tier
        public DinosaurHabitat Habitat { get; set; }
        public Dinosaur DinosaurType { get; set; }
    }
}
