using System;
using System.Collections.Generic;

namespace Twitter
{
    public partial class Chats
    {
        public Chats()
        {
            Messages = new HashSet<Messages>();
            Parties = new HashSet<Parties>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Messages> Messages { get; set; }
        public virtual ICollection<Parties> Parties { get; set; }
    }
}
