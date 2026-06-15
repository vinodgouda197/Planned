using Xunit;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using PlannedProj.API.Controllers;
using PlannedProj.API.Data;
using PlannedNet.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using PlannedNet.Models;

namespace PlannedProj.Tests
{
    public class AuthTests
    {
        private ApplicationDbContext GetInMemoryDatabaseContext()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: System.Guid.NewGuid().ToString())
                .Options;
            return new ApplicationDbContext(options);
        }

        private IConfiguration GetDummyConfiguration()
        {
            var inMemorySettings = new Dictionary<string, string> {
                {"Jwt:Key", "SUPER_SECRET_KEY_LONG_ENOUGH_FOR_SHA256_32_BYTES"},
                {"Jwt:Issuer", "PlannedProj"},
                {"Jwt:Audience", "PlannedProjUsers"}
            };
            return new ConfigurationBuilder().AddInMemoryCollection(inMemorySettings).Build();
        }

        [Fact]
        public async Task Register_ShouldReturnOk_WhenInputParametersAreValid()
        {
            // Arrange
            var context = GetInMemoryDatabaseContext();
            var config = GetDummyConfiguration();
            var controller = new AuthController(context, config);
            var newUser = new UserDto { Username = "pipelineuser", Password = "SecurePassword123" };

            // Act
            var result = await controller.Register(newUser);

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }
    }
}