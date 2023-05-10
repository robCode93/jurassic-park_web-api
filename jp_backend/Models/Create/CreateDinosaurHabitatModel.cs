using jp_backend.Database.Entities;

namespace jp_backend.Models.Create
{
    public class CreateDinosaurHabitatModel
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string Coordinates { get; set; } = string.Empty;
        public double? SizeInSquareKilometers { get; set; }
        public List<Guid> EmployeeIds { get; set; } = new List<Guid>();
    }
}
