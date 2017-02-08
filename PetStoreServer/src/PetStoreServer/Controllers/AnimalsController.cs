using Microsoft.AspNetCore.Mvc;
using PetStoreServer.Models;
using PetStoreServer.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Controllers
{
    [Route("api/[controller]")]
    public class AnimalsController : Controller {

        private readonly AnimalService _animalService;
        public AnimalsController(AnimalService animalService) {
            _animalService = animalService;
        }

        [HttpGet]
        public IEnumerable<Animal> Get() {
            return _animalService.GetAllAnimals();
        }

        [HttpGet("{id}")]
        public Animal Get(long id) {
            return _animalService.GetAnimal(id);
        }

        [HttpDelete("{id}")]
        public void Delete(long id) {
            _animalService.DeleteAnimal(id);
        }

        [HttpPost]
        public void Post([FromBody]Animal animal) {
            _animalService.SaveNewAnimal(animal);
        }
    }
}
