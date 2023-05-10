using jp_backend.Database.Entities;

namespace jp_backend.Models.Update
{
    public class UpdateDinosaurHabitatModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Coordinates { get; set; }
        public double? SizeInSquareKilometers { get; set; }
        public List<Guid> EmployeeIds { get; set; } = new List<Guid>();
    }
}
