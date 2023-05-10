using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class Dinosaur
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string? Description { get; set; }
        public int? DiscoveryYear { get; set; }

        // Informations
        public string? EatingPattern { get; set; }
        public string? ModeOfLocomotion { get; set; }
        public int HeightInCentimeter { get; set; }
        public int LengthInCentimeter { get; set; }
        public double WeightInKilogram { get; set; }

        // Fremdverweise der Klasse Dinosaurier
        public DnaString? DnaString { get; set; }
        public Period? Period { get; set; }
        public DinosaurClass? Classification { get; set; }
        public DinosaurLocality? LocalityOfDiscovery { get; set; }
        public FileReference? Thumbnail { get; set; }
    }
}
