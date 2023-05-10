using jp_backend.Database.Entities;

namespace jp_backend.Models.Details
{
    public class DinosaurDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int? DiscoveryYear { get; set; }

        // Informations
        public string? EatingPattern { get; set; }
        public string? ModeOfLocomotion { get; set; }
        public int HeightInCentimeter { get; set; }
        public int LengthInCentimeter { get; set; }
        public double WeightInKilogram { get; set; }
        public List<string> DnaString { get; set; }

        // Fremdverweise der Klasse Dinosaurier
        public PeriodDetails? Period { get; set; }
        public DinosaurClassDetails? Classification { get; set; }
        public DinosaurLocalityDetails? LocalityOfDiscovery { get; set; }

        // Thumbnail
        public Guid? ThumbnailId { get; set; }
        public string? ThumbnailDownloadUrl { get; set; }
        public FileReferenceDetails? Thumbnail { get; set; }
    }
}
