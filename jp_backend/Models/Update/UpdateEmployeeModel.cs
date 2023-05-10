namespace jp_backend.Models.Update
{
    public class UpdateEmployeeModel
    {
        public string? Title { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public DateTime? Birthdate { get; set; }
        public string? Gender { get; set; }
        public string? JobTitle { get; set; }
        public int? SkillLevel { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public Guid? ThumbnailId { get; set; }
    }
}
