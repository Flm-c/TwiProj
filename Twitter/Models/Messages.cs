using System;
using System.Collections.Generic;

namespace Twitter
{
    public partial class Messages
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int UserId { get; set; }
        public int ChatId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Chats Chat { get; set; }
        public virtual Users User { get; set; }
    }
}
