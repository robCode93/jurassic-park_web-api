using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.Models.Update;
using jp_backend.Models;
using jp_backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using jp_backend.Services;

namespace jp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DinosaurHabitatController : ControllerBase
    {
        IDinosaurHabitatService _dinosaurHabitatService;

        public DinosaurHabitatController(DinosaurHabitatService dinosaurHabitatService)
        {
            _dinosaurHabitatService = dinosaurHabitatService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurHabitatDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllHabitats()
        {
            var models = _dinosaurHabitatService.GetHabitats();

            return Ok(models);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurHabitatDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetHabitatById([FromRoute] Guid id)
        {
            var model = _dinosaurHabitatService.GetHabitatById(id);

            return Ok(model);
        }

        // ########## CREATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("[action]")]
        public IActionResult CreateHabitat(CreateDinosaurHabitatModel createModel)
        {
            var model = _dinosaurHabitatService.CreateHabitat(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdateHabitat([FromRoute] Guid id, UpdateDinosaurHabitatModel updateModel)
        {
            var model = _dinosaurHabitatService.UpdateHabitat(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeleteHabitat([FromRoute] Guid id)
        {
            var model = _dinosaurHabitatService.DeleteHabitat(id);

            return Ok(model);
        }
    }
}
