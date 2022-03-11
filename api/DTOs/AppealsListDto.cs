namespace api.DTOs
{
    public class AppealsListDto
    {
        public int Id { get; set; }
        public bool? Rap { get; set; }
        public string Dept { get; set; } = null!;
        public string Mpid { get; set; } = null!;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Meeting { get; set; }
        public string? Status { get; set; }
        public string? Notes { get; set; }
        public string? StatusUpdateUser { get; set; }
        public DateTime? StatusUpdateDate { get; set; }
        public DateTime? ReceivedDate { get; set; }
    }
}