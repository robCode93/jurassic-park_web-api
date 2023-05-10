namespace jp_backend.Models.Create
{
    public class CreatePeriodModel
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public double AgeStartInMillions { get; set; }
        public double AgeEndInMillions { get; set; }
    }
}
