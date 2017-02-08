using PetStoreServer.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Models
{
    public class Pet : BaseModel
    {
        public string Name { get; set; }
        public DateTime? Birthday { get; set; }
        public Breed Breed { get; set; }
        public string ImageUrl { get; set; }
    }

    public enum Size {
        Unspecified = 0,
        Small = 1,
        Medium = 2,
        Large = 3
    }


}
