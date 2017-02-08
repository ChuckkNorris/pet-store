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
    public class BreedsController : Controller {
        private readonly BreedService _breedService;
        private readonly ImageService _imageService;
        public BreedsController(BreedService breedService, ImageService imageService) {
            this._breedService = breedService;
            _imageService = imageService;

        }

        [HttpGet]
        public IEnumerable<Breed> Get(long? animalId) {
            return _breedService.GetBreeds(animalId);
        }

        [HttpPost]
        public void Post([FromBody]Breed breedViewModel) {
            _breedService.SaveBreed(breedViewModel);
           //await _imageService.UploadImage(picture);
        }

    }
}
