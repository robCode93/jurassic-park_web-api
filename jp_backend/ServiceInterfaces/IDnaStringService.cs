using jp_backend.Models;
using jp_backend.Models.Details;

namespace jp_backend.ServiceInterfaces
{
    public interface IDnaStringService
    {
        // ########## GET-Methoden ##########
        List<DnaStringDetails> GetAllDnaStrings();
        DnaStringDetails GetDnaStringById(Guid id);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteDnaString(Guid id); 
    }
}
