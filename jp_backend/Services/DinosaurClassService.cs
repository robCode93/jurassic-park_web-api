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
    public class DinosaurClassService : IDinosaurClassService
    {
        JurassicParkConnection _context;

        public DinosaurClassService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<DinosaurClassDetails> GetAllDinosaurClasses()
        {
            List<DinosaurClassDetails> detailsList = new List<DinosaurClassDetails>();
            var classes = _context.DinosaurClasses.ToList();

            foreach(var clazz in classes )
            {
                detailsList.Add(ConvertModelToDetailsModel(clazz));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public DinosaurClassDetails? GetDinosaurClassById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.DinosaurClasses.FirstOrDefault(x => x.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateDinosaurClass(CreateDinosaurClassModel createModel)
        {
            ResponseModel model = new ResponseModel();

            if(_context.DinosaurClasses.Any(x => x.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurclass already exists in database";
                return model;
            }

            DinosaurClass clazz = new DinosaurClass();
            clazz.Name = createModel.Name;
            clazz.Description = createModel.Description;
            clazz.DiscoveryYear = createModel.DiscoveryYear;

            _context.DinosaurClasses.Add(clazz);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurclass added to database";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateDinosaurClass(Guid id, UpdateDinosaurClassModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var clazz = _context.DinosaurClasses.FirstOrDefault(x => x.Id == id);

            if(clazz is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurclass not found in database";
                return model;
            }

            if(updateModel.Name is not null && updateModel.Name != clazz.Name && _context.DinosaurClasses.Any(x => x.Name == updateModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of dinosaurclass already exists in database";
                return model;
            }

            if(updateModel.Name is not null)
            {
                clazz.Name = updateModel.Name;
            }

            if(updateModel.Description is not null)
            {
                clazz.Description = updateModel.Description;
            }
            else
            {
                clazz.Description = null;
            }

            if(clazz.DiscoveryYear is not null)
            {
                clazz.DiscoveryYear = updateModel.DiscoveryYear;
            }
            else
            {
                clazz.DiscoveryYear = null;
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurclass successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteDinosaurClass(Guid id)
        {
            ResponseModel model = new ResponseModel();

            var clazz = _context.DinosaurClasses.FirstOrDefault(x => x.Id == id);
            var dinosaurs = _context.Dinosaurs.Include(x => x.Classification).Where(x => x.Classification != null && x.Classification.Id == id).ToList();

            if (clazz is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurclass not found in database";
                return model;
            }

            foreach(var dinosaur in dinosaurs)
            {
                if(dinosaur.Classification is not null && dinosaur.Classification.Id == id)
                {
                    dinosaur.Classification = null;
                }
            }

            _context.DinosaurClasses.Remove(clazz);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurclass successfully deleted";
            return model;
        }

        // ########## HELPER-Methoden ##########
        private DinosaurClassDetails? ConvertModelToDetailsModel(DinosaurClass dinosaurClass)
        {
            if(dinosaurClass == null)
            {
                return null;
            }

            DinosaurClassDetails details = new DinosaurClassDetails();
            details.Id = dinosaurClass.Id;
            details.Description = dinosaurClass.Description;
            details.Name = dinosaurClass.Name;
            details.DiscoveryYear = dinosaurClass.DiscoveryYear;

            return details;
        }
    }
}
