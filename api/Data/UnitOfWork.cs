using api.Entities;
using api.Interfaces;
using AutoMapper;

namespace api.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppealContext _context;
        private readonly IMapper _mapper;
        public UnitOfWork(AppealContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public IAppealRepo AppealRepo => new AppealRepo(_context, _mapper);
        public IDepartmentRepo DepartmentRepo => new DepartmentRepo(_context, _mapper);
        public ITemplateRepo TemplateRepo => new TemplateRepo(_context, _mapper);
        public async Task<bool> Complete()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        public bool HasChanges()
        {
            return _context.ChangeTracker.HasChanges();
        }
    }
}