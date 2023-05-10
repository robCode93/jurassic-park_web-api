using jp_backend.Database.Entities;
using jp_backend.Models.Details;

namespace jp_backend.Models.Update
{
    public class UpdateDinosaurModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DateTime? BirthDate { get; set; }

        // Informations
        public string? EatingPattern { get; set; }
        public string? ModeOfLocomotion { get; set; }
        public int? HeightInCentimeter { get; set; }
        public int? LengthInCentimeter { get; set; }
        public double? WeightInKilogram { get; set; }

        // Fremdverweise der Klasse Dinosaurier
        public List<string>? DnaString { get; set; }
        public Guid? PeriodId { get; set; }
        public Guid? ClassificationId { get; set; }
        public Guid? LocalityOfDiscoveryId { get; set; }
        public Guid? ThumbnailId { get; set; }
    }
}
