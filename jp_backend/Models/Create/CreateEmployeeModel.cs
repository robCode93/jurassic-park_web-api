namespace jp_backend.Models.Create
{
    public class CreateEmployeeModel
    {
        public string? Title { get; set; }
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string? JobTitle { get; set; }
        public int? SkillLevel { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public Guid? ThumbnailId { get; set; }
    }
}
