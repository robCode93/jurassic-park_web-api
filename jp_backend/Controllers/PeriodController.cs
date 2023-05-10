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
    public class PeriodController : ControllerBase
    {
        IPeriodService _periodService;

        public PeriodController(IPeriodService periodService)
        {
            _periodService = periodService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PeriodDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllPeriods()
        {
            var models = _periodService.GetAllPeriods();

            return Ok(models);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PeriodDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetPeriodById([FromRoute] Guid id)
        {
            var model = _periodService.GetPeriodById(id);

            return Ok(model);
        }

        // ########## CREATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("[action]")]
        public IActionResult CreatePeriod(CreatePeriodModel createModel)
        {
            var model = _periodService.CreatePeriod(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdatePeriod([FromRoute] Guid id, UpdatePeriodModel updateModel)
        {
            var model = _periodService.UpdatePeriod(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeletePeriod([FromRoute] Guid id)
        {
            var model = _periodService.DeletePeriod(id);

            return Ok(model);
        }
    }
}
