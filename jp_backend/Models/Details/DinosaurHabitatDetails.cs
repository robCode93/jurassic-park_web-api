using jp_backend.Database.Entities;

namespace jp_backend.Models.Details
{
    public class DinosaurHabitatDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string Coordinates { get; set; } = string.Empty;
        public double? SizeInSquareKilometers { get; set; }
        public IList<EmployeeDetails> Employees { get; set; } = new List<EmployeeDetails>();
    }
}
