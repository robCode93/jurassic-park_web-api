namespace jp_backend.Models.Update
{
    public class UpdatePeriodModel
    {
        public string? Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public double? AgeStartInMillions { get; set; }
        public double? AgeEndInMillions { get; set; }
    }
}
