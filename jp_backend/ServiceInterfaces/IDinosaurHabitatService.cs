using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;

namespace jp_backend.ServiceInterfaces
{
    public interface IDinosaurHabitatService
    {
        // ########## GET-Methoden ##########
        List<DinosaurHabitatDetails> GetHabitats();
        DinosaurHabitatDetails GetHabitatById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreateHabitat(CreateDinosaurHabitatModel createModel);

        // ########## UPDATE-Methoden ##########
        ResponseModel UpdateHabitat(Guid id, UpdateDinosaurHabitatModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteHabitat(Guid id);
    }
}
