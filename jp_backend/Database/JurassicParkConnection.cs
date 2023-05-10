using jp_backend.Database.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace jp_backend.Database
{
    public class JurassicParkConnection : DbContext
    {
        public JurassicParkConnection(DbContextOptions options) : base(options) { }

        public DbSet<Dinosaur> Dinosaurs { get; set; }
        public DbSet<DinosaurClass> DinosaurClasses { get; set; }
        public DbSet<DinosaurLocality> DinosaurLocalities { get; set; }
        public DbSet<DnaString> DnaSequences { get; set; }
        public DbSet<Period> Periods { get; set; }
        public DbSet<DinosaurHabitat> Habitats { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<FileReference> FileReferences { get; set; }
    }
}
