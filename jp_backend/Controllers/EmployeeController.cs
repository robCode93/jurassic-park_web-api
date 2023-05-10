using jp_backend.Models;
using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;
using jp_backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace jp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EmployeeDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllEmployees()
        {
            var models = _employeeService.GetAllEmployees();
            
            foreach(var model in models)
            {
                if (model.ThumbnailId is not null)
                {
                    model.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.ThumbnailId,
                    });
                }
            }
            
            return Ok(models);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(EmployeeDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetEmployeeById([FromRoute] Guid id)
        {
            var model = _employeeService.GetEmployeeById(id);

            if (model.ThumbnailId is not null)
            {
                model.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                {
                    id = model.ThumbnailId,
                });
            }

            return Ok(model);
        }

        // ########## CREATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("[action]")]
        public IActionResult CreateEmployee(CreateEmployeeModel createModel)
        {
            var model = _employeeService.CreateEmployee(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdateEmployee([FromRoute] Guid id, UpdateEmployeeModel updateModel)
        {
            var model = _employeeService.UpdateEmployee(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeleteEmployee([FromRoute] Guid id)
        {
            var model = _employeeService.DeleteEmployee(id);

            return Ok(model);
        }
    }
}
