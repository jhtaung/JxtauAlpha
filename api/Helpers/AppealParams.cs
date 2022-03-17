namespace api.Helpers
{
    public class AppealParams : PaginationParams
    {
        public int? Id { get; set; }
        public string? DepartmentId { get; set; }
        public int Status { get; set; }
        public bool? Rap { get; set; }
    }
}