﻿namespace jp_backend.Models.Details
{
    public class DinosaurClassDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int? DiscoveryYear { get; set; }
    }
}
