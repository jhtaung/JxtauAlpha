namespace api.Interfaces
{
    public interface IUnitOfWork
    {
        IAppealRepo AppealRepo { get; }
        IDepartmentRepo DepartmentRepo { get; }
        ITemplateRepo TemplateRepo { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}