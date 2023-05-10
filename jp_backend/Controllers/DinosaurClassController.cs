using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;
using jp_backend.Models;
using jp_backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace jp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DinosaurClassController : ControllerBase
    {
        IDinosaurClassService _dinosaurClassService;

        public DinosaurClassController(IDinosaurClassService dinosaurClassService)
        {
            _dinosaurClassService = dinosaurClassService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurClassDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllDinosaurClasses()
        {
            var models = _dinosaurClassService.GetAllDinosaurClasses();

            return Ok(models);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurClassDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetDinosaurClassById([FromRoute] Guid id)
        {
            var model = _dinosaurClassService.GetDinosaurClassById(id);

            return Ok(model);
        }

        // ########## CREATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("[action]")]
        public IActionResult CreateDinosaurClass(CreateDinosaurClassModel createModel)
        {
            var model = _dinosaurClassService.CreateDinosaurClass(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdateDinosaurClass([FromRoute] Guid id, UpdateDinosaurClassModel updateModel)
        {
            var model = _dinosaurClassService.UpdateDinosaurClass(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeleteDinosaurClass([FromRoute] Guid id)
        {
            var model = _dinosaurClassService.DeleteDinosaurClass(id);

            return Ok(model);
        }
    }
}
