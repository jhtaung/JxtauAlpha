namespace api.Interfaces
{
    public interface IUnitOfWork
    {
        IAppealRepo AppealRepo { get; }
        ITemplateRepo TemplateRepo { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}