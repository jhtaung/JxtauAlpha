namespace api.DTOs
{
    public class DepartmentDto
    {
        public int Id { get; set; }
        public string Code { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string? PresenterName { get; set; }
        public string? PresenterTitle { get; set; }
        public string CreateUser { get; set; } = null!;
        public DateTime CreateDate { get; set; }
        public string UpdateUser { get; set; } = null!;
        public DateTime UpdateDate { get; set; }
        public string? Comment { get; set; }
    }
}