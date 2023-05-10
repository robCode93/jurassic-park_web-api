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
    public class DinosaurService : IDinosaurService
    {
        JurassicParkConnection _context;

        public DinosaurService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<DinosaurDetails> GetAllDinosaurs()
        {
            List<DinosaurDetails> detailsList = new List<DinosaurDetails>();
            var dinosaurs = _context.Dinosaurs
                .Include(x => x.Period)
                .Include(x => x.Classification)
                .Include(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Thumbnail)
                .ToList();

            foreach(var dinosaur in dinosaurs)
            {
                detailsList.Add(ConvertModelToDetailsModel(dinosaur));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public DinosaurDetails? GetDinosaurById(Guid id)
        {
            var dinosaur = _context.Dinosaurs
                .Include(x => x.Period)
                .Include(x => x.Classification)
                .Include(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Thumbnail)
                .FirstOrDefault(x => x.Id == id);

            return ConvertModelToDetailsModel(dinosaur);
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateDinosaur(CreateDinosaurModel createModel)
        {
            ResponseModel model = new ResponseModel();
            var period = _context.Periods.FirstOrDefault(x => x.Id == createModel.PeriodId);
            var clazz = _context.DinosaurClasses.FirstOrDefault(x => x.Id == createModel.ClassificationId);
            var locality = _context.DinosaurLocalities.FirstOrDefault(x => x.Id == createModel.LocalityOfDiscoveryId);
            var thumbnail = _context.FileReferences.FirstOrDefault(x => x.Id == createModel.ThumbnailId); 

            if (_context.Dinosaurs.Any(x => x.Name == createModel.Name && x.VersionNumber == createModel.VersionNumber))
            {
                model.IsSuccess = false;
                model.Message = "Dinosaur already exists in database";
                return model;
            }

            Dinosaur dinosaur = new Dinosaur();
            dinosaur.Name = createModel.Name;
            dinosaur.Description = createModel.Description;
            dinosaur.DiscoveryYear = createModel.DiscoveryYear;
            dinosaur.EatingPattern = createModel.EatingPattern;
            dinosaur.ModeOfLocomotion = createModel.ModeOfLocomotion;
            dinosaur.HeightInCentimeter = createModel.HeightInCentimeter;
            dinosaur.LengthInCentimeter = createModel.LengthInCentimeter;
            dinosaur.WeightInKilogram = createModel.WeightInKilogram;
            dinosaur.VersionNumber = createModel.VersionNumber;

            if (createModel.DnaString is not null)
            {
                dinosaur.DnaString = createModel.DnaString; 
            }

            if (period is not null)
            {
                dinosaur.Period = period;   
            }

            if (clazz is not null)
            {
                dinosaur.Classification = clazz;
            }

            if (locality is not null)
            {
                dinosaur.LocalityOfDiscovery = locality;
            }

            if (thumbnail is not null)
            {
                dinosaur.Thumbnail = thumbnail;
            }

            _context.Dinosaurs.Add(dinosaur);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaur successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateDinosaur(Guid id, UpdateDinosaurModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var dinosaur = _context.Dinosaurs
                .Include(x => x.Period)
                .Include(x => x.Classification)
                .Include(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Thumbnail)
                .FirstOrDefault(x => x.Id == id);

            var period = _context.Periods.FirstOrDefault(x => x.Id == updateModel.PeriodId);
            var clazz = _context.DinosaurClasses.FirstOrDefault(x => x.Id == updateModel.ClassificationId);
            var locality = _context.DinosaurLocalities.FirstOrDefault(x => x.Id == updateModel.LocalityOfDiscoveryId);
            var thumbnail = _context.FileReferences.FirstOrDefault(x => x.Id == updateModel.ThumbnailId);

            if (dinosaur is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaur not found in database";
                return model;
            }

            if (updateModel.Name is not null && updateModel.Name != dinosaur.Name && _context.Dinosaurs.Any(x => x.Name == updateModel.Name && x.VersionNumber == updateModel.VersionNumber))
            {
                model.IsSuccess = false;
                model.Message = "Dinosaur already exists in database";
                return model;
            }

            if (updateModel.Name is not null)
            {
                dinosaur.Name = updateModel.Name;
            }

            if (updateModel.Description is not null)
            {
                dinosaur.Description = updateModel.Description;
            }
            else
            {
                dinosaur.Description = null;
            }

            if (updateModel.DiscoveryYear is not null)
            {
                dinosaur.DiscoveryYear = updateModel.DiscoveryYear;
            }
            else
            {
                dinosaur.DiscoveryYear = null;
            }

            if (updateModel.EatingPattern is not null)
            {
                dinosaur.EatingPattern = updateModel.EatingPattern;
            }
            else
            {
                dinosaur.EatingPattern = null;
            }

            if (updateModel.ModeOfLocomotion is not null)
            {
                dinosaur.ModeOfLocomotion = updateModel.ModeOfLocomotion;
            }
            else
            {
                dinosaur.ModeOfLocomotion = null;
            }

            if (updateModel.HeightInCentimeter is not null)
            {
                dinosaur.HeightInCentimeter = updateModel.HeightInCentimeter.Value;
            }

            if (updateModel.LengthInCentimeter is not null)
            {
                dinosaur.LengthInCentimeter = updateModel.LengthInCentimeter.Value;
            }

            if (updateModel.WeightInKilogram is not null)
            {
                dinosaur.WeightInKilogram = updateModel.WeightInKilogram.Value;
            }

            if (period is not null)
            {
                dinosaur.Period = period;
            }
            else
            {
                dinosaur.Period = null;
            }

            if (clazz is not null)
            {
                dinosaur.Classification = clazz;
            }
            else
            {
                dinosaur.Classification = null;
            }

            if (locality is not null)
            {
                dinosaur.LocalityOfDiscovery = locality;
            }
            else
            {
                dinosaur.LocalityOfDiscovery = null;
            }

            if (thumbnail is not null)
            {
                dinosaur.Thumbnail = thumbnail;
            }
            else
            {
                dinosaur.Thumbnail = null;
            }

            if(updateModel.DnaString is not null)
            {
                dinosaur.DnaString = updateModel.DnaString;
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaur successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteDinosaur(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var dinosaur = _context.Dinosaurs
                .Include(x => x.Period)
                .Include(x => x.Classification)
                .Include(x => x.LocalityOfDiscovery).ThenInclude(x => x.Thumbnail)
                .Include(x => x.Thumbnail)
                .FirstOrDefault(x => x.Id == id);

            if(dinosaur is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaur not found in database";
                return model;
            }

            _context.Dinosaurs.Remove(dinosaur);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Dinosaur successfully deleted from database";
            return model;
        }

        // ########## HELPER-Methoden ##########
        private DinosaurDetails? ConvertModelToDetailsModel(Dinosaur dinosaur)
        {
            if(dinosaur == null)
            {
                return null;
            }

            DinosaurDetails details = new DinosaurDetails();
            details.Id = dinosaur.Id;
            details.Name = dinosaur.Name;
            details.Description = dinosaur.Description;
            details.DiscoveryYear = dinosaur.DiscoveryYear;
            details.EatingPattern = dinosaur.EatingPattern;
            details.ModeOfLocomotion = dinosaur.ModeOfLocomotion;
            details.HeightInCentimeter = dinosaur.HeightInCentimeter;
            details.LengthInCentimeter = dinosaur.LengthInCentimeter;
            details.WeightInKilogram = dinosaur.WeightInKilogram;
            details.VersionNumber = dinosaur.VersionNumber;

            if (dinosaur.DnaString is not null)
            {
                details.DnaString = dinosaur.DnaString;
            }

            if(dinosaur.Period is not null)
            {
                details.Period = new PeriodDetails();
                details.Period.Id = dinosaur.Period.Id;
                details.Period.Name = dinosaur.Period.Name;
                details.Period.Description = dinosaur.Period.Description;
                details.Period.AgeStartInMillions = dinosaur.Period.AgeStartInMillions;
                details.Period.AgeEndInMillions = dinosaur.Period.AgeEndInMillions;
            }

            if(dinosaur.Classification is not null)
            {
                details.Classification = new DinosaurClassDetails();
                details.Classification.Id = dinosaur.Classification.Id;
                details.Classification.Description = dinosaur.Classification.Description;
                details.Classification.Name = dinosaur.Classification.Name;
                details.Classification.DiscoveryYear = dinosaur.Classification.DiscoveryYear;
            }

            if(dinosaur.LocalityOfDiscovery is not null)
            {
                details.LocalityOfDiscovery = new DinosaurLocalityDetails();
                details.LocalityOfDiscovery.Id = dinosaur.LocalityOfDiscovery.Id;
                details.LocalityOfDiscovery.Name = dinosaur.LocalityOfDiscovery.Name;
                details.LocalityOfDiscovery.Country = dinosaur.LocalityOfDiscovery.Country;
                details.LocalityOfDiscovery.Description = dinosaur.LocalityOfDiscovery.Description;

                if (dinosaur.LocalityOfDiscovery.Thumbnail is not null)
                {
                    details.LocalityOfDiscovery.ThumbnailId = dinosaur.LocalityOfDiscovery.Thumbnail.Id;
                    details.LocalityOfDiscovery.Thumbnail = new FileReferenceDetails();
                    details.LocalityOfDiscovery.Thumbnail.Id = dinosaur.LocalityOfDiscovery.Thumbnail.Id;
                    details.LocalityOfDiscovery.Thumbnail.FileName = dinosaur.LocalityOfDiscovery.Thumbnail.FileName;
                    details.LocalityOfDiscovery.Thumbnail.Description = dinosaur.LocalityOfDiscovery.Thumbnail.Description;
                    details.LocalityOfDiscovery.Thumbnail.OnLocality = dinosaur.LocalityOfDiscovery.Thumbnail.OnLocality;
                    details.LocalityOfDiscovery.Thumbnail.OnDinosaur = dinosaur.LocalityOfDiscovery.Thumbnail.OnDinosaur;
                    details.LocalityOfDiscovery.Thumbnail.OnEmployee = dinosaur.LocalityOfDiscovery.Thumbnail.OnEmployee;
                    details.LocalityOfDiscovery.Thumbnail.MimeType = dinosaur.LocalityOfDiscovery.Thumbnail.MimeType;
                    details.LocalityOfDiscovery.Thumbnail.CreationDate = dinosaur.LocalityOfDiscovery.Thumbnail.CreationDate;
                    details.LocalityOfDiscovery.Thumbnail.FileSizeInBytes = dinosaur.LocalityOfDiscovery.Thumbnail.FileSizeInBytes;
                }
            }

            if(dinosaur.Thumbnail is not null)
            {
                details.Thumbnail = new FileReferenceDetails();
                details.Thumbnail.Id = dinosaur.Thumbnail.Id;
                details.Thumbnail.FileName = dinosaur.Thumbnail.FileName;
                details.Thumbnail.Description = dinosaur.Thumbnail.Description;
                details.Thumbnail.MimeType = dinosaur.Thumbnail.MimeType;
                details.Thumbnail.FileSizeInBytes = dinosaur.Thumbnail.FileSizeInBytes;
                details.Thumbnail.OnDinosaur = dinosaur.Thumbnail.OnDinosaur;
                details.Thumbnail.OnLocality = dinosaur.Thumbnail.OnLocality;
                details.Thumbnail.OnEmployee = dinosaur.Thumbnail.OnEmployee;
                details.Thumbnail.CreationDate = dinosaur.Thumbnail.CreationDate;
            }

            return details;
        }
    }
}
