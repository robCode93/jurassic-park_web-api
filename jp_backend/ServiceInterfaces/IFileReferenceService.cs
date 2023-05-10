using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;

namespace jp_backend.ServiceInterfaces
{
    public interface IFileReferenceService
    {
        // ########## GET-Methoden ##########
        public List<FileReferenceDetails> GetAllFileReferences();
        public FileReferenceDetails GetFileReferenceById(Guid id);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateFileReference(CreateFileReferenceModel createModel);
        public FileReferenceDetails UploadFileToDatabase(Stream file, string mimeType, Guid subjectId, string subjectType);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteFileReference(Guid id);
    }
}
