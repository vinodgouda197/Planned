using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace PlannedProj.API.Controllers
{
    [Authorize] // Instantly blocks any web request that doesn't supply a valid authorization token
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        [HttpGet("data")]
        public IActionResult GetSecureContent()
        {
            return Ok(new { secureMessage = "Success! Authorized token validated. Protected page data loaded successfully." });
        }
    }
}