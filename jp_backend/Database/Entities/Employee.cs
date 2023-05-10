using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class Employee
    {
        [Key]
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string? JobTitle { get; set; }
        public int? SkillLevel { get; set; }
        public string? PhoneNumber { get; set; }

        [EmailAddress]
        public string? EmailAddress { get; set; }    

        // Thumbnail
        public FileReference? Thumbnail { get; set; }
    }
}
