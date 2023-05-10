using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;

namespace jp_backend.ServiceInterfaces
{
    public interface IEmployeeService
    {
        // ########## GET-Methoden ##########
        List<EmployeeDetails> GetAllEmployees();
        EmployeeDetails GetEmployeeById(Guid id);

        // ########## CREATE-Methoden ##########
        ResponseModel CreateEmployee(CreateEmployeeModel createModel);

        // ########## UPDATE-Methoden ##########
        ResponseModel UpdateEmployee(Guid id, UpdateEmployeeModel updateModel);

        // ########## DELETE-Methoden ##########
        ResponseModel DeleteEmployee(Guid id);
    }
}
