using System;
using System.Collections.Generic;

namespace Twitter
{
    public partial class Parties
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ChatId { get; set; }

        public virtual Chats Chat { get; set; }
        public virtual Users User { get; set; }
    }
}
