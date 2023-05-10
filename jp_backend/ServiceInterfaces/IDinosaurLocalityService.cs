using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;

namespace jp_backend.ServiceInterfaces
{
    public interface IDinosaurLocalityService
    {
        // ########## GET-Methoden ##########
        List<DinosaurLocalityDetails> GetAllLocalities();
        DinosaurLocalityDetails GetDinosaurLocalityById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreateLocality(CreateDinosaurLocalityModel createModel);

        // ########## UPDATE-Methoden ##########
        ResponseModel UpdateLocality(Guid id, UpdateDinosaurLocalityModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteLocality(Guid id);
    }
}
