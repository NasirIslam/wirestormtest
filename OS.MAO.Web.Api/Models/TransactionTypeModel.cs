using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WireStorm.Web.Api.Models
{
    public class TransactionTypeModel
    {
        public Guid Id { get; set; }
        public string Terms { get; set; }
        public string Description { get; set; }
        public bool Impact { get; set; }
    }
}