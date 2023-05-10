using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;
using jp_backend.Models;

namespace jp_backend.ServiceInterfaces
{
    public interface IDinosaurClassService
    {
        // ########## GET-Methoden ##########
        List<DinosaurClassDetails> GetAllDinosaurClasses();
        DinosaurClassDetails GetDinosaurClassById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreateDinosaurClass(CreateDinosaurClassModel createModel);

        // ########## UPDATE-Methoden ##########
        ResponseModel UpdateDinosaurClass(Guid id, UpdateDinosaurClassModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteDinosaurClass(Guid id);
    }
}
