using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;

namespace jp_backend.ServiceInterfaces
{
    public interface IParkAnimalService
    {
        // ########## GET-Methoden ##########
        List<ParkAnimalDetails> GetAllParkAnimals();
        List<ParkAnimalDetails> GetParkAnimalsByHabitatId(Guid id);
        ParkAnimalDetails GetParkAnimalById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreateParkAnimal(CreateParkAnimalModel createModel);

        // ########## Update-Methoden ##########
        ResponseModel UpdateParkAnimal(Guid id, UpdateParkAnimalModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteParkAnimal(Guid id);
    }
}
