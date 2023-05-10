namespace jp_backend.Models.Create
{
    public class CreateDinosaurClassModel
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int? DiscoveryYear { get; set; }
    }
}
