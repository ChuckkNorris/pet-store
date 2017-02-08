using PetStoreServer.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Models
{
    public class Breed : BaseModel
    {
        public string Name { get; set; }
        public Animal Animal { get; set; }
    }
   
}
