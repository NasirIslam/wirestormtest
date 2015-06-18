using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WireStorm.Web.Api.Models
{
    public class AccountModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double OpeningBalance { get; set; }
        public string AccountNumber { get; set; }
        public int SortOrder { get; set; }
        public Guid UserId { get; set; }
        public Guid AccountTypeId { get; set; }
    }
}