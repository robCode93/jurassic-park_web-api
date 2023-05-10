using jp_backend.Database;
using jp_backend.Database.Entities;
using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;
using jp_backend.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace jp_backend.Services
{
    public class DinosaurHabitatService : IDinosaurHabitatService
    {
        JurassicParkConnection _context;

        public DinosaurHabitatService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<DinosaurHabitatDetails> GetHabitats()
        {
            List<DinosaurHabitatDetails> detailsList = new List<DinosaurHabitatDetails>();
            var habitats = _context.Habitats.Include(x => x.Employees).ThenInclude(x => x.Thumbnail).ToList();

            foreach(var habitat in habitats)
            {
                detailsList.Add(ConvertModelToDetailsModel(habitat));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public DinosaurHabitatDetails? GetHabitatById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.Habitats.Include(x => x.Employees).ThenInclude(x => x.Thumbnail).FirstOrDefault(x => x.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateHabitat(CreateDinosaurHabitatModel createModel)
        {
            ResponseModel model = new ResponseModel();
            
            if(_context.Habitats.Any(x => x.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of dinosaurhabitat already exists in database";
                return model;
            }

            DinosaurHabitat habitat = new DinosaurHabitat();
            habitat.Name = createModel.Name;
            habitat.Description = createModel.Description;
            habitat.Coordinates = createModel.Coordinates;
            habitat.SizeInSquareKilometers = createModel.SizeInSquareKilometers;

            habitat.Employees = new List<Employee>();
            if(createModel.EmployeeIds is not null)
            {
                foreach(var id in createModel.EmployeeIds)
                {
                    var currentEmployee = _context.Employees.FirstOrDefault(x => x.Id == id);
                    
                    if(currentEmployee != null)
                    {
                        habitat.Employees.Add(currentEmployee);
                    }
                }
            }

            _context.Habitats.Add(habitat);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurhabitat successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateHabitat(Guid id, UpdateDinosaurHabitatModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var habitat = _context.Habitats.Include(x => x.Employees).ThenInclude(x => x.Thumbnail).FirstOrDefault(x => x.Id == id);

            if(habitat is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurhabitat not found in database";
                return model;
            }

            if (updateModel.Name is not null && habitat.Name != updateModel.Name && _context.Habitats.Any(x => x.Name == updateModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of dinosaurhabitat already exists in database";
                return model;
            }

            if(updateModel.Name is not null)
            {
                habitat.Name = updateModel.Name;
            }

            if(updateModel.Description is not null)
            {
                habitat.Description = updateModel.Description;
            }
            else
            {
                habitat.Description = null;
            }

            if (updateModel.Coordinates is not null)
            {
                habitat.Coordinates = updateModel.Coordinates;
            }

            if (updateModel.SizeInSquareKilometers is not null)
            {
                habitat.SizeInSquareKilometers = updateModel.SizeInSquareKilometers;
            }
            else
            {
                habitat.SizeInSquareKilometers = null;
            }

            habitat.Employees = new List<Employee>();
            if (updateModel.EmployeeIds is not null)
            {
                foreach (var empId in updateModel.EmployeeIds)
                {
                    var currentEmployee = _context.Employees.FirstOrDefault(x => x.Id == empId);

                    if (currentEmployee != null)
                    {
                        habitat.Employees.Add(currentEmployee);
                    }
                }
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurhabitat successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteHabitat(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var habitat = _context.Habitats.Include(x => x.Employees).ThenInclude(x => x.Thumbnail).FirstOrDefault(x => x.Id == id);

            if(habitat is null)
            {
                model.IsSuccess = true;
                model.Message = "Dinosaurhabitat not found in database";
                return model;
            }

            _context.Habitats.Remove(habitat);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurhabitat successfully deleted";
            return model;
        }

        // ########## HELPER-Methoden ##########
        private DinosaurHabitatDetails? ConvertModelToDetailsModel(DinosaurHabitat habitat)
        {
            if(habitat is null)
            {
                return null;
            }

            DinosaurHabitatDetails details = new DinosaurHabitatDetails();
            details.Id = habitat.Id;
            details.Coordinates = habitat.Coordinates;
            details.Description = habitat.Description;
            details.Name = habitat.Name;
            details.SizeInSquareKilometers = habitat.SizeInSquareKilometers;

            details.Employees = new List<EmployeeDetails>();

            if(habitat.Employees is not null)
            {
                foreach(var employee in  habitat.Employees)
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
                    
                    if(employee.Thumbnail is not null)
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

                    details.Employees.Add(employeeDetails);
                }
            }

            return details;
        }
    }
}
