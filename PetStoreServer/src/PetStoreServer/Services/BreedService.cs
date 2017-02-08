using Microsoft.EntityFrameworkCore;
using PetStoreServer.Models;
using PetStoreServer.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Services
{
    public class BreedService {
        private readonly PetStoreContext _context;
        public BreedService(PetStoreContext context) {
            this._context = context;
        }

        public IEnumerable<Breed> GetBreeds(long? animalId = null) {
            IQueryable<Breed> breedQuery = _context.Breeds.Include(breed => breed.Animal);
            if (animalId != null)
                breedQuery = breedQuery.Where(breed => breed.Animal.Id == animalId);

            return breedQuery.ToList();
        }

        public void SaveBreed(Breed breed) {
            if (!BreedExists(breed.Animal.Id, breed.Name)) {
                Animal matchingAnimal = _context.Animals.Find(breed.Animal.Id);
                breed.Animal = matchingAnimal;
                _context.Breeds.Add(breed);
                _context.SaveChanges();
            }
            else
                throw new Exception("Breed already exists");
        }

        private bool BreedExists(long animalId, string breedName) {
            Breed existingBreed = _context.Breeds
                .Include(breed => breed.Animal)
                .FirstOrDefault(breed => breed.Name == breedName && breed.Animal.Id == animalId);
            return existingBreed != null;
        }
      
    }
}
