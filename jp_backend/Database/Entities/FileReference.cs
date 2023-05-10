using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class FileReference
    {
        [Key]
        public Guid Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? MimeType { get; set; }
        public long? FileSizeInBytes { get; set; } 
        public DateTime CreationDate { get; set; }
        
        // Fremdverweise der Files
        public Guid? OnDinosaur { get; set; }
        public Guid? OnLocality { get; set; }
        public Guid? OnEmployee { get; set; }
    }
}
