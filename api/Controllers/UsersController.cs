using api.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<UserDto>> Get()
        {
            return await Task.Run(() => {
                String name = WindowsIdentity.GetCurrent().Name.ToString();
                var user = new UserDto() { Name = name };
                return user;
            });
        }
    }
}