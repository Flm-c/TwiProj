using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Twitter.Controllers
{
    [Route("api")]
    [ApiController]
    public class AppController : ControllerBase
    {
        // GET: api/App
        private DBtwiContext _ctx = new DBtwiContext();
        [HttpGet("GetPosts")]
        public List<Posts> Get()
        {
            var posts = _ctx.Posts.Include("User").ToList();
            return posts;
        }
    }
}
