using System.ComponentModel.DataAnnotations;

namespace jp_backend.Database.Entities
{
    public class DnaString
    {
        [Key]
        public Guid Id { get; set; }
        public IList<string> DnaSequential { get; set; } = new List<string>();
    }
}
