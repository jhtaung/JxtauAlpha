namespace api.DTOs
{
    public class TemplateDto
    {
        public int Id { get; set; }
        public string? SubjectTemplate { get; set; }
        public string? AppealInfoTemplate { get; set; }
        public string? PlanReferenceTemplate { get; set; }
        public string CreateUser { get; set; } = null!;
        public DateTime CreateDate { get; set; }
        public string UpdateUser { get; set; } = null!;
        public DateTime UpdateDate { get; set; }
        public string? Comment { get; set; }
        public string? ExecSummaryTemplate { get; set; }
        public string? RecommendationsTemplate { get; set; }
        public string? Department { get; set; }
    }
}