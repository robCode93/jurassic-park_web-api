using jp_backend.Database;
using jp_backend.Database.Entities;
using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;
using jp_backend.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;

namespace jp_backend.Services
{
    public class ParkAnimalService : IParkAnimalService
    {
        JurassicParkConnection _context;

        public ParkAnimalService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<ParkAnimalDetails> GetAllParkAnimals()
        {
            List<ParkAnimalDetails> detailsList = new List<ParkAnimalDetails>();
            var animals = _context.ParkAnimals
                .Include(x => x.DinosaurType).ThenInclude(x => x.Classification)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Period)
                .Include(x => x.DinosaurType).ThenInclude(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Habitat).ThenInclude(x => x.Employees).ThenInclude(x => x.Thumbnail)
                .ToList();  

            foreach(var animal in animals )
            {
                detailsList.Add(ConvertModelToDetailsModel(animal));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public List<ParkAnimalDetails> GetParkAnimalsByHabitatId(Guid id)
        {
            List<ParkAnimalDetails> detailsList = new List<ParkAnimalDetails>();
            var animals = _context.ParkAnimals
                .Include(x => x.DinosaurType).ThenInclude(x => x.Classification)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Period)
                .Include(x => x.DinosaurType).ThenInclude(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Habitat).ThenInclude(x => x.Employees).ThenInclude(x => x.Thumbnail)
                .Where(x => x.Habitat != null && x.Habitat.Id == id)
                .ToList();

            foreach (var animal in animals)
            {
                detailsList.Add(ConvertModelToDetailsModel(animal));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public ParkAnimalDetails? GetParkAnimalById(Guid id)
        {
            var animal = _context.ParkAnimals
                .Include(x => x.DinosaurType).ThenInclude(x => x.Classification)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Period)
                .Include(x => x.DinosaurType).ThenInclude(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Habitat).ThenInclude(x => x.Employees).ThenInclude(x => x.Thumbnail)
                .FirstOrDefault(x => x.Id == id);

            return ConvertModelToDetailsModel(animal);
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateParkAnimal(CreateParkAnimalModel createModel)
        {
            ResponseModel model = new ResponseModel();
            int databaseCount = _context.ParkAnimals.Count();
            var dinosaur = _context.Dinosaurs.FirstOrDefault(x => x.Id == createModel.DinosaurTypeId);
            var habitat = _context.Habitats.FirstOrDefault(x => x.Id == createModel.HabitatId);

            if(dinosaur is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurtype not found in database";
                return model;
            }

            ParkAnimal animal = new ParkAnimal();
            animal.Name = createModel.Name;
            animal.Gender = createModel.Gender;
            animal.Description = createModel.Description;
            animal.Birthdate = createModel.Birthdate;
            animal.AnimalNumber = databaseCount + 1;
            animal.DinosaurType = dinosaur;

            if(habitat is not null)
            {
                animal.Habitat = habitat;
            }

            _context.ParkAnimals.Add(animal);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Parkanimal successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateParkAnimal(Guid id, UpdateParkAnimalModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var habitat = _context.Habitats.FirstOrDefault(x => x.Id == updateModel.HabitatId);
            var dinosaur = _context.Dinosaurs.FirstOrDefault(x => x.Id == updateModel.DinosaurTypeId);
            var animal = _context.ParkAnimals
                .Include(x => x.DinosaurType).ThenInclude(x => x.Classification)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Period)
                .Include(x => x.DinosaurType).ThenInclude(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.DinosaurType).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Habitat).ThenInclude(x => x.Employees).ThenInclude(x => x.Thumbnail)
                .FirstOrDefault(x => x.Id == id);

            if(animal is null)
            {
                model.IsSuccess = false;
                model.Message = "parkanimal not found in database";
                return model;
            }

            if(updateModel.Name is not null)
            {
                animal.Name = updateModel.Name;
            }

            if (updateModel.Gender is not null)
            {
                animal.Gender = updateModel.Gender;
            }

            if (updateModel.Description is not null)
            {
                animal.Description = updateModel.Description;
            }
            else
            {
                animal.Description = null;
            }

            if (updateModel.Birthdate is not null)
            {
                animal.Birthdate = updateModel.Birthdate.Value;
            }

            if(habitat is not null)
            {
                animal.Habitat = habitat;
            }
            else
            {
                animal.Habitat = null;
            }

            if(dinosaur is not null)
            {
                animal.DinosaurType = dinosaur;
            }
            else
            {
                animal.DinosaurType = null;
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Parkanimal successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteParkAnimal(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var animal = _context.ParkAnimals
                .FirstOrDefault(x => x.Id == id);

            if(animal is null)
            {
                model.IsSuccess = false;
                model.Message = "Parkanimal not found in database";
                return model;
            }

            _context.ParkAnimals.Remove(animal);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Parkanimal successfully deleted from database";
            return model;
        }

        // ########## HELPER-Methoden ##########
        private ParkAnimalDetails? ConvertModelToDetailsModel(ParkAnimal parkAnimal)
        {
            if(parkAnimal is null)
            {
                return null;
            }

            ParkAnimalDetails details = new ParkAnimalDetails();
            details.Id = parkAnimal.Id;
            details.Name = parkAnimal.Name;
            details.Gender = parkAnimal.Gender;
            details.Birthdate = parkAnimal.Birthdate;
            details.AnimalNumber = parkAnimal.AnimalNumber;
            details.Description = parkAnimal.Description;

            if(parkAnimal.Habitat is not null)
            {
                details.Habitat = new DinosaurHabitatDetails();
                details.Habitat.Id = parkAnimal.Habitat.Id;
                details.Habitat.Coordinates = parkAnimal.Habitat.Coordinates;
                details.Habitat.Description = parkAnimal.Habitat.Description;
                details.Habitat.Name = parkAnimal.Habitat.Name;
                details.Habitat.SizeInSquareKilometers = parkAnimal.Habitat.SizeInSquareKilometers;

                details.Habitat.Employees = new List<EmployeeDetails>();

                if (parkAnimal.Habitat.Employees is not null)
                {
                    foreach (var employee in parkAnimal.Habitat.Employees)
                    {
                        EmployeeDetails employeeDetails = new EmployeeDetails();
                        employeeDetails.Id = employee.Id;
                        employeeDetails.SkillLevel = employee.SkillLevel;
                        employeeDetails.Birthdate = employee.Birthdate;
                        employeeDetails.Firstname = employee.Firstname;
                        employeeDetails.Lastname = employee.Lastname;
                        employeeDetails.PhoneNumber = employee.PhoneNumber;
                        employeeDetails.Email = employee.EmailAddress;
                        employeeDetails.Gender = employee.Gender;
                        employeeDetails.JobTitle = employee.JobTitle;
                        employeeDetails.Title = employee.Title;

                        if (employee.Thumbnail is not null)
                        {
                            employeeDetails.ThumbnailId = employee.Thumbnail.Id;
                            employeeDetails.Thumbnail = new FileReferenceDetails();
                            employeeDetails.Thumbnail.Id = employee.Thumbnail.Id;
                            employeeDetails.Thumbnail.FileName = employee.Thumbnail.FileName;
                            employeeDetails.Thumbnail.Description = employee.Thumbnail.Description;
                            employeeDetails.Thumbnail.OnLocality = employee.Thumbnail.OnLocality;
                            employeeDetails.Thumbnail.OnDinosaur = employee.Thumbnail.OnDinosaur;
                            employeeDetails.Thumbnail.OnEmployee = employee.Thumbnail.OnEmployee;
                            employeeDetails.Thumbnail.MimeType = employee.Thumbnail.MimeType;
                            employeeDetails.Thumbnail.CreationDate = employee.Thumbnail.CreationDate;
                            employeeDetails.Thumbnail.FileSizeInBytes = employee.Thumbnail.FileSizeInBytes;
                        }

                        details.Habitat.Employees.Add(employeeDetails);
                    }
                }
            }

            if(parkAnimal.DinosaurType is not null)
            {
                details.DinosaurType = new DinosaurDetails();
                details.DinosaurType.Id = parkAnimal.DinosaurType.Id;
                details.DinosaurType.Name = parkAnimal.DinosaurType.Name;
                details.DinosaurType.Description = parkAnimal.DinosaurType.Description;
                details.DinosaurType.DiscoveryYear = parkAnimal.DinosaurType.DiscoveryYear;
                details.DinosaurType.EatingPattern = parkAnimal.DinosaurType.EatingPattern;
                details.DinosaurType.ModeOfLocomotion = parkAnimal.DinosaurType.ModeOfLocomotion;
                details.DinosaurType.HeightInCentimeter = parkAnimal.DinosaurType.HeightInCentimeter;
                details.DinosaurType.LengthInCentimeter = parkAnimal.DinosaurType.LengthInCentimeter;
                details.DinosaurType.WeightInKilogram = parkAnimal.DinosaurType.WeightInKilogram;
                details.DinosaurType.VersionNumber = parkAnimal.DinosaurType.VersionNumber;

                if (parkAnimal.DinosaurType.DnaString is not null)
                {
                    details.DinosaurType.DnaString = parkAnimal.DinosaurType.DnaString;
                }

                if (parkAnimal.DinosaurType.Period is not null)
                {
                    details.DinosaurType.Period = new PeriodDetails();
                    details.DinosaurType.Period.Id = parkAnimal.DinosaurType.Period.Id;
                    details.DinosaurType.Period.Name = parkAnimal.DinosaurType.Period.Name;
                    details.DinosaurType.Period.Description = parkAnimal.DinosaurType.Period.Description;
                    details.DinosaurType.Period.AgeStartInMillions = parkAnimal.DinosaurType.Period.AgeStartInMillions;
                    details.DinosaurType.Period.AgeEndInMillions = parkAnimal.DinosaurType.Period.AgeEndInMillions;
                }

                if (parkAnimal.DinosaurType.Classification is not null)
                {
                    details.DinosaurType.Classification = new DinosaurClassDetails();
                    details.DinosaurType.Classification.Id = parkAnimal.DinosaurType.Classification.Id;
                    details.DinosaurType.Classification.Description = parkAnimal.DinosaurType.Classification.Description;
                    details.DinosaurType.Classification.Name = parkAnimal.DinosaurType.Classification.Name;
                    details.DinosaurType.Classification.DiscoveryYear = parkAnimal.DinosaurType.Classification.DiscoveryYear;
                }

                if (parkAnimal.DinosaurType.LocalityOfDiscovery is not null)
                {
                    details.DinosaurType.LocalityOfDiscovery = new DinosaurLocalityDetails();
                    details.DinosaurType.LocalityOfDiscovery.Id = parkAnimal.DinosaurType.LocalityOfDiscovery.Id;
                    details.DinosaurType.LocalityOfDiscovery.Name = parkAnimal.DinosaurType.LocalityOfDiscovery.Name;
                    details.DinosaurType.LocalityOfDiscovery.Country = parkAnimal.DinosaurType.LocalityOfDiscovery.Country;
                    details.DinosaurType.LocalityOfDiscovery.Description = parkAnimal.DinosaurType.LocalityOfDiscovery.Description;

                    if (parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail is not null)
                    {
                        details.DinosaurType.LocalityOfDiscovery.ThumbnailId = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.Id;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail = new FileReferenceDetails();
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.Id = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.Id;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.FileName = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.FileName;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.Description = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.Description;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.OnLocality = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.OnLocality;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.OnDinosaur = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.OnDinosaur;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.OnEmployee = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.OnEmployee;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.MimeType = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.MimeType;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.CreationDate = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.CreationDate;
                        details.DinosaurType.LocalityOfDiscovery.Thumbnail.FileSizeInBytes = parkAnimal.DinosaurType.LocalityOfDiscovery.Thumbnail.FileSizeInBytes;
                    }
                }

                if (parkAnimal.DinosaurType.Thumbnail is not null)
                {
                    details.DinosaurType.Thumbnail = new FileReferenceDetails();
                    details.DinosaurType.Thumbnail.Id = parkAnimal.DinosaurType.Thumbnail.Id;
                    details.DinosaurType.Thumbnail.FileName = parkAnimal.DinosaurType.Thumbnail.FileName;
                    details.DinosaurType.Thumbnail.Description = parkAnimal.DinosaurType.Thumbnail.Description;
                    details.DinosaurType.Thumbnail.MimeType = parkAnimal.DinosaurType.Thumbnail.MimeType;
                    details.DinosaurType.Thumbnail.FileSizeInBytes = parkAnimal.DinosaurType.Thumbnail.FileSizeInBytes;
                    details.DinosaurType.Thumbnail.OnDinosaur = parkAnimal.DinosaurType.Thumbnail.OnDinosaur;
                    details.DinosaurType.Thumbnail.OnLocality = parkAnimal.DinosaurType.Thumbnail.OnLocality;
                    details.DinosaurType.Thumbnail.OnEmployee = parkAnimal.DinosaurType.Thumbnail.OnEmployee;
                    details.DinosaurType.Thumbnail.CreationDate = parkAnimal.DinosaurType.Thumbnail.CreationDate;
                }
            }

            return details;
        }
    }
}
