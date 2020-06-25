using System;
using System.Collections.Generic;

namespace Twitter
{
    public partial class Posts
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Image { get; set; }
        public int UserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Users User { get; set; }
    }
}
