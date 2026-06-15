namespace PlannedNet.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty; // Encrypted storage hash string
        public string Role { get; set; } = "User";
        public string PhoneNumber { get; set; } = string.Empty; // Example extension field for future updates
    }

    public class UserDto
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
