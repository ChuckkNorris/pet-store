using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PetStoreServer.Services;

namespace PetStoreServer
{
    public class Startup
    {

        private const string PET_DB_CONNECTION_STRING = "Server=tcp:petstoreserver.database.windows.net,1433;Initial Catalog=petstoredb;Persist Security Info=False;User ID={SqlUserName};Password={SqlPassword};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvcCore().AddJsonFormatters();
            services.AddDbContext<PetStoreContext>(options => options.UseSqlServer(PET_DB_CONNECTION_STRING));
            services.AddScoped<PetService>();
            services.AddScoped<BreedService>();
            services.AddScoped<AnimalService>();
            services.AddScoped<ImageService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseCors(cors => cors.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod());
            // 
            app.UseMvc();
        }
    }
}
