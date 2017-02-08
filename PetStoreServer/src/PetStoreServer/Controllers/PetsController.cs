using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PetStoreServer.Models;
using PetStoreServer.Services;
using PetStoreServer.ViewModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PetStoreServer.Controllers
{
    [Route("api/[controller]")]
    public class PetsController : Controller
    {
        private readonly PetService _petService;
        public PetsController(PetService petService) {
            this._petService = petService;
        }

        [HttpGet]
        public IEnumerable<Pet> Get(long animalId = 0, long breedId = 0) {
            IEnumerable<Pet> toReturn = null;
            if (breedId != 0)
                toReturn = _petService.GetPets(pet => pet.Breed.Id == breedId);
            else if (animalId != 0)
                toReturn = _petService.GetPets(pet => pet.Breed.Animal.Id == animalId);
            else 
               toReturn = _petService.GetPets();
            return toReturn;
        }

        
        [HttpPost]
        public void Post([FromBody]Pet pet) {
            _petService.SavePet(pet);
        }

    }
}
