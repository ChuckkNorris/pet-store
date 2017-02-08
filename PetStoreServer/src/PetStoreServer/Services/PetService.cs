using Microsoft.EntityFrameworkCore;
using PetStoreServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Services
{
    public class PetService
    {
        private readonly PetStoreContext _petContext;
        public PetService(PetStoreContext petContext) {
            this._petContext = petContext;
        }

        public void SavePet(Pet pet) {
            Breed breed = _petContext.Breeds.Find(pet.Breed.Id);
            pet.Breed = breed;
            _petContext.Pets.Add(pet);
            _petContext.SaveChanges();
        }

        public IEnumerable<Pet> GetPets(Func<Pet, bool> petQuery = null) {
            IEnumerable<Pet> toReturn = null;
            IQueryable<Pet> petsInclude = _petContext.Pets
                .Include(pet => pet.Breed)
                .ThenInclude(breed => breed.Animal);
            if (petQuery != null)
                toReturn = petsInclude.Where(petQuery).ToList();
            else
                toReturn = petsInclude.ToList();
            return toReturn;
        }
    }
}
