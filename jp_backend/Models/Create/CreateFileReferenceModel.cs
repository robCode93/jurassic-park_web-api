namespace jp_backend.Models.Create
{
    public class CreateFileReferenceModel
    {
        public string FileName { get; set; } = string.Empty;
        public string MimeType { get; set; } = string.Empty;
        public string? Description { get; set; }
        public long? FileSizeInBytes { get; set; }
    }
}
