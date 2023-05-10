using jp_backend.Database.Entities;

namespace jp_backend.Models.Details
{
    public class DinosaurLocalityDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? Country { get; set; }

        // Thumbnail
        public Guid? ThumbnailId { get; set; }
        public string? ThumbnailDownloadUrl { get; set; }
        public FileReferenceDetails? Thumbnail { get; set; }
    }
}
