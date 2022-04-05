namespace api.Helpers
{
    public class DepartmentParams : PaginationParams
    {
        public DepartmentParams()
        {
            OrderBy = "DepartmentName";
        }
    }
}