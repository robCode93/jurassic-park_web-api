namespace jp_backend.Models.Details
{
    public class PeriodDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public double AgeStartInMillions { get; set; }
        public double AgeEndInMillions { get; set; }
    }
}
