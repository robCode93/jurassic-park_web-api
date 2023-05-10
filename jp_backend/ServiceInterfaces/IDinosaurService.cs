using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;

namespace jp_backend.ServiceInterfaces
{
    public interface IDinosaurService
    {
        // ########## GET-Methoden ##########
        List<DinosaurDetails> GetAllDinosaurs();
        DinosaurDetails GetDinosaurById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreateDinosaur(CreateDinosaurModel createModel);

        // ########## UPDATE-Methoden ##########
        ResponseModel UpdateDinosaur(Guid id, UpdateDinosaurModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteDinosaur(Guid id);
    }
}
