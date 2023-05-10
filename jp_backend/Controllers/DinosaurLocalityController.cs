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
    public class DinosaurLocalityController : ControllerBase
    {
        IDinosaurLocalityService _dinosaurLocalityService;

        public DinosaurLocalityController(IDinosaurLocalityService dinosaurLocalityService)
        {
            _dinosaurLocalityService = dinosaurLocalityService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurLocalityDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllLocalities()
        {
            var models = _dinosaurLocalityService.GetAllLocalities();

            foreach (var model in models)
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurLocalityDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetLocalityById([FromRoute] Guid id)
        {
            var model = _dinosaurLocalityService.GetDinosaurLocalityById(id);

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
        public IActionResult CreateLocality(CreateDinosaurLocalityModel createModel)
        {
            var model = _dinosaurLocalityService.CreateLocality(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdateLocality([FromRoute] Guid id, UpdateDinosaurLocalityModel updateModel)
        {
            var model = _dinosaurLocalityService.UpdateLocality(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeleteLocality([FromRoute] Guid id)
        {
            var model = _dinosaurLocalityService.DeleteLocality(id);

            return Ok(model);
        }
    }
}
