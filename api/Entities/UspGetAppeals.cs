namespace api.Entities
{
    public class UspGetAppeals {    
        public int AppealId { get; set; }
        public bool? Rap { get; set; }
        public string Mpid { get; set; } = null!;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? DepartmentCode { get; set; }
        public int AppealStatusTypeID { get; set; }
        public string? AppealStatusTypeDescription { get; set; }

    }
}