using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WireStorm.Web.Api.Models
{
    public class TransactionModel
    {
        public Guid AccountId { get; set; }
        public string TransactionDate { get; set; }
        public Guid TransactionTypeId { get; set; }
        public Guid UserId { get; set; }
        public double Deposit { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public string Notes { get; set; }
        public string Files { get; set; }
        public bool IsRepeat { get; set; }
    }
}