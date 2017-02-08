using PetStoreServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreServer.Services {
    public class AnimalService {
        private readonly PetStoreContext _context;
        public AnimalService(PetStoreContext context) {
            _context = context;
        }

        public IEnumerable<Animal> GetAllAnimals() {
            return _context.Animals.ToList();
        }

        public Animal GetAnimal(long id) {
            return _context.Animals.Find(id);
        }

        public void DeleteAnimal(long id) {
            Animal toDelete = GetAnimal(id);
            if (toDelete != null) {
                _context.Animals.Remove(toDelete);
                _context.SaveChanges();
            }
            else
                throw new Exception($"Could not find an animal with the ID '{id}'");
        }

        public void SaveNewAnimal(Animal animal) {
            if (!AnimalExists(animal.Name)) {
                _context.Animals.Add(animal);
                _context.SaveChanges();
            }
            else
                throw new Exception($"An animal with the name '{animal.Name}' already exists");

        }

        private bool AnimalExists(string animalNameToCheck) {
            Animal existingAnimal = _context.Animals.FirstOrDefault(animal => animal.Name == animalNameToCheck);
            return existingAnimal != null;
        }
    }
}
