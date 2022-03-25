namespace api.DTOs
{
    public class TemplateUpdateDto
    {
        public int Id { get; set; }
        public string? SubjectTemplate { get; set; }
        public string? AppealInfoTemplate { get; set; }
        public string? PlanReferenceTemplate { get; set; }
        public string? ExecSummaryTemplate { get; set; }
        public string? RecommendationsTemplate { get; set; }
    }
}