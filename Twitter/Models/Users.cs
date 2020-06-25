using System;
using System.Collections.Generic;

namespace Twitter
{
    public partial class Users
    {
        public Users()
        {
            Messages = new HashSet<Messages>();
            Parties = new HashSet<Parties>();
            Posts = new HashSet<Posts>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RememberToken { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<Messages> Messages { get; set; }
        public virtual ICollection<Parties> Parties { get; set; }
        public virtual ICollection<Posts> Posts { get; set; }
    }
}
