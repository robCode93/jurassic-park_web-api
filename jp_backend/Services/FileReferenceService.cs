using jp_backend.Database.Entities;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models;
using jp_backend.ServiceInterfaces;
using jp_backend.Database;
using Microsoft.EntityFrameworkCore;

namespace jp_backend.Services
{
    public class FileReferenceService : IFileReferenceService
    {
        JurassicParkConnection _context;

        public FileReferenceService(JurassicParkConnection context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<FileReferenceDetails> GetAllFileReferences()
        {
            List<FileReferenceDetails> detailsList = new List<FileReferenceDetails>();
            var fileReferences = _context.FileReferences.ToList();

            foreach (var fileReference in fileReferences)
            {
                detailsList.Add(ConvertModelToDetailsModel(fileReference));
            }

            detailsList.RemoveAll(i => i == null);
            detailsList.Sort();
            return detailsList;
        }

        public FileReferenceDetails? GetFileReferenceById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.FileReferences.FirstOrDefault(i => i.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateFileReference(CreateFileReferenceModel createModel)
        {
            ResponseModel model = new ResponseModel();

            FileReference fileReference = new FileReference();
            fileReference.Description = createModel.Description;
            fileReference.FileName = createModel.FileName;
            fileReference.FileSizeInBytes = createModel.FileSizeInBytes;
            fileReference.MimeType = createModel.MimeType;

            _context.FileReferences.Add(fileReference);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "FileReference successfully created";
            return model;
        }

        public FileReferenceDetails UploadFileToDatabase(Stream file, string mimeType, Guid subjectId, string subjectType)
        {
            string directoryName = mimeType.Split('/')[0];
            string directoryPath = "./openmind-data/" + directoryName;
            Guid fileReferenceId = Guid.NewGuid();
            string suffix = mimeType.Split("/")[1];
            string filePath = directoryPath + "/" + fileReferenceId + "." + suffix;
            if (suffix == "vnd.ms-excel")
            {
                suffix = "csv";
            }

            using (FileStream fs = File.Create(filePath))
            {
                file.CopyTo(fs);
                fs.Close();
            }

            FileReference reference = new FileReference();
            reference.Id = fileReferenceId;
            reference.FileName = filePath;
            reference.FileSizeInBytes = file.Length;
            reference.MimeType = mimeType;
            reference.CreationDate = DateTime.Now;

            if (subjectType == "d")
            {
                reference.OnDinosaur = subjectId;
            }
            else if (subjectType == "l")
            {
                reference.OnLocality = subjectId;
            }
            else if (subjectType == "e")
            {
                reference.OnEmployee = subjectId;
            }

            _context.FileReferences.Add(reference);
            _context.SaveChanges();

            FileReferenceDetails details = new FileReferenceDetails();
            details.Id = reference.Id;
            details.FileName = reference.FileName;
            details.FileSizeInBytes = reference.FileSizeInBytes;
            details.MimeType = reference.MimeType;
            details.OnDinosaur = reference.OnDinosaur;
            details.OnLocality = reference.OnLocality;
            details.OnEmployee = reference.OnEmployee;
            details.CreationDate = reference.CreationDate;

            return details;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteFileReference(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var fileReference = _context.FileReferences.FirstOrDefault(f => f.Id == id);
            var dinosaur = _context.Dinosaurs.Include(s => s.Thumbnail).FirstOrDefault(s => s.Id == fileReference.OnDinosaur);
            var locality = _context.DinosaurLocalities.Include(p => p.Thumbnail).FirstOrDefault(p => p.Id == fileReference.OnLocality);
            var employee = _context.Employees.Include(p => p.Thumbnail).FirstOrDefault(p => p.Id == fileReference.OnEmployee);

            if (fileReference is null)
            {
                model.IsSuccess = false;
                model.Message = "Filereference not found";
                return model;
            }

            if (fileReference.OnDinosaur is not null && dinosaur is null)
            {
                model.IsSuccess = false;
                model.Message = "Dinosaur-Data not found in database";
                return model;
            }

            if (fileReference.OnLocality is not null && locality is null)
            {
                model.IsSuccess = false;
                model.Message = "Locality-Data not found in database";
                return model;
            }

            if (fileReference.OnEmployee is not null && employee is null)
            {
                model.IsSuccess = false;
                model.Message = "Employee-Data not found in database";
                return model;
            }

            if (dinosaur is not null)
            {
                dinosaur.Thumbnail = null;
            }

            if (locality is not null)
            {
                if (locality.Thumbnail is not null && locality.Thumbnail.Id == fileReference.Id)
                {
                    locality.Thumbnail = null;
                }
            }

            if (employee is not null)
            {
                employee.Thumbnail = null;
            }

            _context.FileReferences.Remove(fileReference);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Filereference successfully deleted";
            return model;
        }

        // ########## HELPERS ##########
        private FileReferenceDetails? ConvertModelToDetailsModel(FileReference fileReference)
        {
            if (fileReference is null)
            {
                return null;
            }

            FileReferenceDetails details = new FileReferenceDetails();
            details.Id = fileReference.Id;
            details.FileName = fileReference.FileName;
            details.Description = fileReference.Description;
            details.MimeType = fileReference.MimeType;
            details.FileSizeInBytes = fileReference.FileSizeInBytes;
            details.OnDinosaur = fileReference.OnDinosaur;
            details.OnLocality = fileReference.OnLocality;
            details.OnEmployee = fileReference.OnEmployee;
            details.CreationDate = fileReference.CreationDate;

            return details;
        }
    }
}
