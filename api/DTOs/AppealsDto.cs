using api.Entities;

namespace api.DTOs
{
    public class AppealsDto
    {
        public AppealsDto()
        {
            AppealContacts = new HashSet<AppealContact>();
            AppealStatusLogs = new HashSet<AppealStatusLog>();
        }

        public int AppealId { get; set; }
        public int? PlanTypeId { get; set; }
        public int DepartmentId { get; set; }
        public string Mpid { get; set; } = null!;
        public string? Subject { get; set; }
        public string? AppealInfo { get; set; }
        public string? PlanReference { get; set; }
        public string? ExecSummary { get; set; }
        public string? AdditionalInfo { get; set; }
        public string? Recommendations { get; set; }
        public string? Analysis { get; set; }
        public string? SupportingDocs { get; set; }
        public bool? Lock { get; set; }
        public bool? Rap { get; set; }
        public bool? IsPrecedentEstablished { get; set; }
        public DateTime? AppealReceivedDate { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public string CreateUser { get; set; } = null!;
        public DateTime CreateDate { get; set; }
        public string UpdateUser { get; set; } = null!;
        public DateTime UpdateDate { get; set; }
        public string? Comment { get; set; }

        public virtual Department Department { get; set; } = null!;
        public virtual PlanType? PlanType { get; set; }
        public virtual ICollection<AppealContact> AppealContacts { get; set; }
        public virtual ICollection<AppealStatusLog> AppealStatusLogs { get; set; }
    }
}