namespace api.Helpers
{
    public class AppealParams : PaginationParams
    {
        public string? DepartmentId { get; set; }
        public int Status { get; set; }
        public bool? Rap { get; set; }
    }
}