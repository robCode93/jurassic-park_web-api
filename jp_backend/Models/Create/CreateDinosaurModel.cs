using jp_backend.Database.Entities;
using jp_backend.Models.Details;

namespace jp_backend.Models.Create
{
    public class CreateDinosaurModel
    {
        public string Name { get; set; } = String.Empty;
        public string? Description { get; set; }
        public DateTime? Birthdate { get; set; }

        // Informations
        public string? EatingPattern { get; set; }
        public string? ModeOfLocomotion { get; set; }
        public int HeightInCentimeter { get; set; }
        public int LengthInCentimeter { get; set; }
        public double WeightInKilogram { get; set; }

        // Fremdverweise der Klasse Dinosaurier
        public List<string> DnaString { get; set; } = new List<string>();
        public Guid? PeriodId { get; set; }
        public Guid? ClassificationId { get; set; }
        public Guid? LocalityOfDiscoveryId { get; set; }
        public Guid? ThumbnailId { get; set; }
    }
}
