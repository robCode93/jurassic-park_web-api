namespace jp_backend.Models.Details
{
    public class DnaStringDetails
    {
        public Guid Id { get; set; }
        public IList<string> DnaSequential { get; set; } = new List<string>();
    }
}
