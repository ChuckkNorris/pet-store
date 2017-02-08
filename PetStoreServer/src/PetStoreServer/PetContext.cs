using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PetStoreServer.Models;

namespace PetStoreServer
{
    public class PetStoreContext : DbContext
    {
        public PetStoreContext(DbContextOptions options) : base(options) { }

        public DbSet<Pet> Pets { get; set; }
        public DbSet<Breed> Breeds { get; set; }
        public DbSet<Animal> Animals { get; set; }



    }
}
