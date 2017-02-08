using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Models
{
    public class PetBreed : BaseModel {
       
        [ForeignKey("PetId")]
        public Pet Pet { get; set; }
        public long PetId { get; set; }


        [ForeignKey("BreedId")]
        public Breed Breed { get; set; }
        public long BreedId { get; set; }
    }
}
