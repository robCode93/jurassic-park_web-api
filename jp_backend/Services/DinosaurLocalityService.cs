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
    public class DinosaurLocalityService : IDinosaurLocalityService
    {
        JurassicParkConnection _context;

        public DinosaurLocalityService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<DinosaurLocalityDetails> GetAllLocalities()
        {
            List<DinosaurLocalityDetails> detailsList = new List<DinosaurLocalityDetails>();
            var localities = _context.DinosaurLocalities.Include(x => x.Thumbnail).ToList();

            foreach(var locality in localities)
            {
                detailsList.Add(ConvertModelToDetailsModel(locality));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public DinosaurLocalityDetails? GetDinosaurLocalityById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.DinosaurLocalities.Include(x => x.Thumbnail).FirstOrDefault(x => x.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateLocality(CreateDinosaurLocalityModel createModel)
        {
            ResponseModel model = new ResponseModel();

            if (_context.DinosaurLocalities.Any(x => x.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of dinosaurlocality already exists in database";
                return model;
            }

            DinosaurLocality locality = new DinosaurLocality();
            locality.Name = createModel.Name;
            locality.Description = createModel.Description;
            locality.Country = createModel.Country;

            if(createModel.ThumbnailId is not null)
            {
                var thumbnail = _context.FileReferences.FirstOrDefault(x => x.Id == createModel.ThumbnailId);
                
                if (thumbnail != null)
                {
                    locality.Thumbnail = thumbnail;
                }
            }

            _context.DinosaurLocalities.Add(locality);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurlocality successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateLocality(Guid id, UpdateDinosaurLocalityModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var locality = _context.DinosaurLocalities.Include(x => x.Thumbnail).FirstOrDefault(x => x.Id == id);

            if (locality is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurlocality not found in database";
                return model;
            }

            if (updateModel.Name is not null && locality.Name != updateModel.Name && _context.DinosaurLocalities.Any(x => x.Name == updateModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of dinosaurlocality already exists in database";
                return model;
            }

            if (updateModel.Name is not null)
            {
                locality.Name = updateModel.Name;
            }

            if (updateModel.Description is not null)
            {
                locality.Description = updateModel.Description;
            }
            else
            {
                locality.Description = null;
            }

            if (updateModel.Country is not null)
            {
                locality.Country = updateModel.Country;
            }
            else
            {
                locality.Country = null;
            }

            if (updateModel.ThumbnailId is not null)
            {
                var thumbnail = _context.FileReferences.FirstOrDefault(x => x.Id == updateModel.ThumbnailId);

                if(thumbnail is not null)
                {
                    locality.Thumbnail = thumbnail;
                }
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurlocality successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteLocality(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var locality = _context.DinosaurLocalities.Include(x => x.Thumbnail).FirstOrDefault(x => x.Id == id);

            if(locality is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaurlocality not found in database";
                return model;
            }

            _context.DinosaurLocalities.Remove(locality);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaurlocality successfully deleted";
            return model;
        }

        // ########## HELPER-Methoden ##########
        private DinosaurLocalityDetails? ConvertModelToDetailsModel(DinosaurLocality locality)
        {
            if (locality == null)
            {
                return null;
            }

            DinosaurLocalityDetails details = new DinosaurLocalityDetails();
            details.Id = locality.Id;
            details.Name = locality.Name;
            details.Country = locality.Country;
            details.Description = locality.Description;

            if (locality.Thumbnail is not null)
            {
                details.ThumbnailId = locality.Thumbnail.Id;
                details.Thumbnail = new FileReferenceDetails();
                details.Thumbnail.Id = locality.Thumbnail.Id;
                details.Thumbnail.FileName = locality.Thumbnail.FileName;
                details.Thumbnail.Description = locality.Thumbnail.Description;
                details.Thumbnail.OnLocality = locality.Thumbnail.OnLocality;
                details.Thumbnail.OnDinosaur = locality.Thumbnail.OnDinosaur;
                details.Thumbnail.OnEmployee = locality.Thumbnail.OnEmployee;
                details.Thumbnail.MimeType = locality.Thumbnail.MimeType;
                details.Thumbnail.CreationDate = locality.Thumbnail.CreationDate;
                details.Thumbnail.FileSizeInBytes = locality.Thumbnail.FileSizeInBytes;
            }

            return details;
        }
    }
}
