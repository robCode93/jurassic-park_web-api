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
    public class PeriodService : IPeriodService
    {
        JurassicParkConnection _context;

        public PeriodService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<PeriodDetails> GetAllPeriods()
        {
            List<PeriodDetails> detailsList = new List<PeriodDetails>();
            var periods = _context.Periods.ToList();

            foreach(var period in periods )
            {
                detailsList.Add(ConvertModelToDetailsModel(period));
            }

            detailsList.RemoveAll(x => x == null);
            detailsList = detailsList.OrderBy(x => x.Name).ToList();
            return detailsList;
        }

        public PeriodDetails? GetPeriodById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.Periods.FirstOrDefault(x => x.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreatePeriod(CreatePeriodModel createModel)
        {
            ResponseModel model = new ResponseModel();

            if (_context.Periods.Any(x => x.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of period already exists in database";
                return model;
            }

            Period period = new Period();
            period.Name = createModel.Name;
            period.Description = createModel.Description;
            period.AgeStartInMillions = createModel.AgeStartInMillions;
            period.AgeEndInMillions = createModel.AgeEndInMillions;

            _context.Periods.Add(period);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Period successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdatePeriod(Guid id, UpdatePeriodModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var period = _context.Periods.FirstOrDefault(x => x.Id == id);

            if (period is null)
            {
                model.IsSuccess = false;
                model.Message = "Period not found in database";
                return model;
            }

            if (updateModel.Name is not null && period.Name != updateModel.Name && _context.Periods.Any(x => x.Name == updateModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name of periods already exists in database";
                return model;
            }

            if(updateModel.Name is not null)
            {
                period.Name = updateModel.Name;
            }

            if (updateModel.AgeStartInMillions is not null)
            {
                period.AgeStartInMillions = updateModel.AgeStartInMillions.Value;
            }

            if (updateModel.AgeEndInMillions is not null)
            {
                period.AgeEndInMillions = updateModel.AgeEndInMillions.Value;
            }

            if (updateModel.Description is not null)
            {
                period.Description = updateModel.Description;
            }
            else
            {
                period.Description = null;
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Period successfully updated";
            return model;   
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeletePeriod(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var period = _context.Periods.FirstOrDefault(x => x.Id == id);

            if (period is null)
            {
                model.IsSuccess = false;
                model.Message = "Period not found in database";
                return model;
            }

            _context.Periods.Remove(period);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Period successfully deleted";
            return model;   
        }

        // ########## HELPER-Methoden ##########
        private PeriodDetails? ConvertModelToDetailsModel(Period period)
        {
            if(period == null) return null;

            PeriodDetails details = new PeriodDetails();
            details.Id = period.Id;
            details.Name = period.Name;
            details.Description = period.Description;
            details.AgeStartInMillions = period.AgeStartInMillions;
            details.AgeEndInMillions = period.AgeEndInMillions;

            return details;
        }
    }
}
