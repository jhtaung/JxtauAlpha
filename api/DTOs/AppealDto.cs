namespace api.DTOs
{
    public class AppealDto
    {
        public int Id { get; set; }
        public string? Mpid { get; set; }
        public string? Subject { get; set; }
        public string? Comment { get; set; }
        public string? AppealInfo { get; set; }
        public string? PlanReference { get; set; }
        public string? ExecSummary { get; set; }
        public string? AdditionalInfo { get; set; }
        public string? Recommendations { get; set; }
        public string? Analysis { get; set; }
        public string? SupportingDocs { get; set; }
        public string CreateUser { get; set; } = null!;
        public string UpdateUser { get; set; } = null!;
        public bool? Lock { get; set; }
        public bool? Rap { get; set; }
        public bool? IsPrecedentEstablished { get; set; }
        public DateTime? AppealReceivedDate { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public string? Status { get; set; }
        public DateTime MeetingDate { get; set; }
        public string? PlanType { get; set; }
        public string? Department { get; set; }
        public string? Appellant { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Zip { get; set; }
    }
}