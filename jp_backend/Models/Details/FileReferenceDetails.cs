namespace jp_backend.Models.Details
{
    public class FileReferenceDetails
    {
        public Guid Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? MimeType { get; set; }
        public long? FileSizeInBytes { get; set; }
        public DateTime CreationDate { get; set; }

        // Download
        public string? DownloadUrl { get; set; }

        // Fremdverweise
        public Guid? OnDinosaur { get; set; }
        public Guid? OnLocality { get; set; }
        public Guid? OnEmployee { get; set; }
    }
}
