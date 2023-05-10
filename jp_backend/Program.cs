using jp_backend.Database;
using jp_backend.ServiceInterfaces;
using jp_backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<JurassicParkConnection>(x => x.UseNpgsql(builder.Configuration.GetConnectionString("ConStr")));

builder.Services.AddScoped<IDinosaurClassService, DinosaurClassService>();
builder.Services.AddScoped<IDinosaurHabitatService, DinosaurHabitatService>();
builder.Services.AddScoped<IDinosaurLocalityService, DinosaurLocalityService>();
builder.Services.AddScoped<IDinosaurService, DinosaurService>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IFileReferenceService, FileReferenceService>();
builder.Services.AddScoped<IPeriodService, PeriodService>();
builder.Services.AddScoped<IParkAnimalService, ParkAnimalService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
