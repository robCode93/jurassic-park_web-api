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
    public class EmployeeService : IEmployeeService
    {
        JurassicParkConnection _context;
        public EmployeeService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<EmployeeDetails> GetAllEmployees()
        {
            List<EmployeeDetails> detailsList = new List<EmployeeDetails>();
            var employees = _context.Employees.Include(x => x.Thumbnail).ToList();

            foreach( var employee in employees )
            {
                detailsList.Add(ConvertModelToDetailsModel(employee));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Lastname).ToList();
            return detailsList;
        }

        public EmployeeDetails? GetEmployeeById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.Employees.Include(x => x.Thumbnail).FirstOrDefault(x => x.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateEmployee(CreateEmployeeModel createModel)
        {
            ResponseModel model = new ResponseModel();

            Employee employee = new Employee();
            employee.Firstname = createModel.Firstname;
            employee.Lastname = createModel.Lastname;
            employee.Birthdate = createModel.Birthdate;
            employee.PhoneNumber = createModel.PhoneNumber;
            employee.EmailAddress = createModel.Email;
            employee.Gender = createModel.Gender;
            employee.JobTitle = createModel.JobTitle;
            employee.SkillLevel = createModel.SkillLevel;
            employee.Title = createModel.Title;
            
            if(createModel.ThumbnailId != null)
            {
                var thumbnail = _context.FileReferences.FirstOrDefault(x => x.Id == createModel.ThumbnailId);

                if(thumbnail is not null)
                {
                    employee.Thumbnail = thumbnail;
                }
            }

            _context.Employees.Add(employee);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Employee successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateEmployee(Guid id, UpdateEmployeeModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var employee = _context.Employees.Include(x => x.Thumbnail).FirstOrDefault(x => x.Id == id);

            if (employee is null)
            {
                model.IsSuccess = false;
                model.Message = "Employee not found in database";
                return model;
            }

            if(updateModel.Title is not null)
            {
                employee.Title = updateModel.Title;
            }
            else
            {
                employee.Title = null;
            }

            if (updateModel.Firstname is not null)
            {
                employee.Firstname = updateModel.Firstname;
            }

            if (updateModel.Lastname is not null)
            {
                employee.Lastname = updateModel.Lastname;
            }

            if (updateModel.Birthdate is not null)
            {
                employee.Birthdate = updateModel.Birthdate.Value;
            }

            if (updateModel.Gender is not null)
            {
                employee.Gender = updateModel.Gender;
            }

            if (updateModel.JobTitle is not null)
            {
                employee.JobTitle = updateModel.JobTitle;
            }
            else
            {
                employee.JobTitle = null;
            }

            if (updateModel.SkillLevel is not null)
            {
                employee.SkillLevel = updateModel.SkillLevel;
            }
            else
            {
                employee.SkillLevel = null;
            }

            if (updateModel.PhoneNumber is not null)
            {
                employee.PhoneNumber = updateModel.PhoneNumber;
            }
            else
            {
                employee.PhoneNumber = null;
            }

            if (updateModel.Email is not null)
            {
                employee.EmailAddress = updateModel.Email;
            }
            else
            {
                employee.EmailAddress = null;
            }

            if(updateModel.ThumbnailId is not null)
            {
                var thumbnail = _context.FileReferences.FirstOrDefault(x => x.Id == updateModel.ThumbnailId);

                if(thumbnail is not null)
                {
                    employee.Thumbnail = thumbnail;
                }
            }
            else
            {
                employee.Thumbnail = null;
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Employee successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteEmployee(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var employee = _context.Employees.Include(x => x.Thumbnail).FirstOrDefault(x => x.Id == id);

            if (employee is null)
            {
                model.IsSuccess = false;
                model.Message = "Employee not found in database";
                return model;
            }

            _context.Employees.Remove(employee);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Employee successfully deleted from database";
            return model;
        }

        // ########## HELPER-Methoden ##########
        private EmployeeDetails? ConvertModelToDetailsModel(Employee employee)
        {
            if(employee is null)
            {
                return null;
            }

            EmployeeDetails details = new EmployeeDetails();
            details.Id = employee.Id;
            details.SkillLevel = employee.SkillLevel;
            details.Birthdate = employee.Birthdate;
            details.Firstname = employee.Firstname;
            details.Lastname = employee.Lastname;
            details.PhoneNumber = employee.PhoneNumber;
            details.Email = employee.EmailAddress;
            details.Gender = employee.Gender;
            details.JobTitle = employee.JobTitle;
            details.Title = employee.Title;

            if (employee.Thumbnail is not null)
            {
                details.ThumbnailId = employee.Thumbnail.Id;
                details.Thumbnail = new FileReferenceDetails();
                details.Thumbnail.Id = employee.Thumbnail.Id;
                details.Thumbnail.FileName = employee.Thumbnail.FileName;
                details.Thumbnail.Description = employee.Thumbnail.Description;
                details.Thumbnail.OnLocality = employee.Thumbnail.OnLocality;
                details.Thumbnail.OnDinosaur = employee.Thumbnail.OnDinosaur;
                details.Thumbnail.OnEmployee = employee.Thumbnail.OnEmployee;
                details.Thumbnail.MimeType = employee.Thumbnail.MimeType;
                details.Thumbnail.CreationDate = employee.Thumbnail.CreationDate;
                details.Thumbnail.FileSizeInBytes = employee.Thumbnail.FileSizeInBytes;
            }

            return details;
        }
    }
}
