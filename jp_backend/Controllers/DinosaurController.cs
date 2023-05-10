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
    public class DinosaurController : ControllerBase
    {
        IDinosaurService _dinosaurService;

        public DinosaurController(IDinosaurService dinosaurService)
        {
            _dinosaurService = dinosaurService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllDinosaurs()
        {
            var models = _dinosaurService.GetAllDinosaurs();

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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(DinosaurDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetDinosaurById([FromRoute] Guid id)
        {
            var model = _dinosaurService.GetDinosaurById(id);

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
        public IActionResult CreateDinosaur(CreateDinosaurModel createModel)
        {
            var model = _dinosaurService.CreateDinosaur(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdateDinosaur([FromRoute] Guid id, UpdateDinosaurModel updateModel)
        {
            var model = _dinosaurService.UpdateDinosaur(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeleteDinosaur([FromRoute] Guid id)
        {
            var model = _dinosaurService.DeleteDinosaur(id);

            return Ok(model);
        }
    }
}
