using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;

namespace jp_backend.ServiceInterfaces
{
    public interface IPeriodService
    {
        // ########## GET-Methoden ##########
        List<PeriodDetails> GetAllPeriods();
        PeriodDetails GetPeriodById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreatePeriod(CreatePeriodModel createModel);

        // ########## UPDATE-Methoden ##########
        ResponseModel UpdatePeriod(Guid id, UpdatePeriodModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeletePeriod(Guid id);
    }
}
