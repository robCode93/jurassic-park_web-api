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
    public class ParkAnimalController : ControllerBase
    {
        IParkAnimalService _parkAnimalService;

        public ParkAnimalController(IParkAnimalService parkAnimalService)
        {
            _parkAnimalService = parkAnimalService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ParkAnimalDetails[]))]
        [Route("[action]")]
        public IActionResult GetAllAnimals()
        {
            var models = _parkAnimalService.GetAllParkAnimals();

            foreach (var model in models)
            {
                if(model.DinosaurType is not null)
                {
                    if(model.DinosaurType.ThumbnailId is not null)
                    {
                        model.DinosaurType.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = model.DinosaurType.ThumbnailId,
                        });
                    }

                    if (model.DinosaurType.LocalityOfDiscovery is not null)
                    {
                        if (model.DinosaurType.LocalityOfDiscovery.ThumbnailId is not null)
                        {
                            model.DinosaurType.LocalityOfDiscovery.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                            {
                                id = model.DinosaurType.LocalityOfDiscovery.ThumbnailId,
                            });
                        }
                    }
                }

                if(model.Habitat is not null)
                {
                    if(model.Habitat.Employees is not null)
                    {
                        foreach(var employee in model.Habitat.Employees)
                        {
                            if (employee.ThumbnailId is not null)
                            {
                                employee.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                                {
                                    id = employee.ThumbnailId,
                                });
                            }
                        }
                    }
                }
            }

            return Ok(models);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ParkAnimalDetails[]))]
        [Route("{id}/[action]")]
        public IActionResult GetAnimalsByHabitatId([FromRoute] Guid id)
        {
            var models = _parkAnimalService.GetParkAnimalsByHabitatId(id);

            foreach (var model in models)
            {
                if (model.DinosaurType is not null)
                {
                    if (model.DinosaurType.ThumbnailId is not null)
                    {
                        model.DinosaurType.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = model.DinosaurType.ThumbnailId,
                        });
                    }

                    if (model.DinosaurType.LocalityOfDiscovery is not null)
                    {
                        if (model.DinosaurType.LocalityOfDiscovery.ThumbnailId is not null)
                        {
                            model.DinosaurType.LocalityOfDiscovery.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                            {
                                id = model.DinosaurType.LocalityOfDiscovery.ThumbnailId,
                            });
                        }
                    }
                }

                if (model.Habitat is not null)
                {
                    if (model.Habitat.Employees is not null)
                    {
                        foreach (var employee in model.Habitat.Employees)
                        {
                            if (employee.ThumbnailId is not null)
                            {
                                employee.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                                {
                                    id = employee.ThumbnailId,
                                });
                            }
                        }
                    }
                }
            }

            return Ok(models);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ParkAnimalDetails))]
        [Route("{id}/[action]")]
        public IActionResult GetAnimalById([FromRoute] Guid id)
        {
            var model = _parkAnimalService.GetParkAnimalById(id);

            if (model.DinosaurType is not null)
            {
                if (model.DinosaurType.ThumbnailId is not null)
                {
                    model.DinosaurType.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.DinosaurType.ThumbnailId,
                    });
                }

                if (model.DinosaurType.LocalityOfDiscovery is not null)
                {
                    if (model.DinosaurType.LocalityOfDiscovery.ThumbnailId is not null)
                    {
                        model.DinosaurType.LocalityOfDiscovery.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = model.DinosaurType.LocalityOfDiscovery.ThumbnailId,
                        });
                    }
                }
            }

            if (model.Habitat is not null)
            {
                if (model.Habitat.Employees is not null)
                {
                    foreach (var employee in model.Habitat.Employees)
                    {
                        if (employee.ThumbnailId is not null)
                        {
                            employee.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                            {
                                id = employee.ThumbnailId,
                            });
                        }
                    }
                }
            }

            return Ok(model);
        }

        // ########## CREATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("[action]")]
        public IActionResult CreateAnimal(CreateParkAnimalModel createModel)
        {
            var model = _parkAnimalService.CreateParkAnimal(createModel);

            return Ok(model);
        }

        // ########## UPDATE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult UpdateAnimal([FromRoute] Guid id, UpdateParkAnimalModel updateModel)
        {
            var model = _parkAnimalService.UpdateParkAnimal(id, updateModel);

            return Ok(model);
        }

        // ########## DELETE-Methoden ##########
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseModel))]
        [Route("{id}/[action]")]
        public IActionResult DeleteAnimal([FromRoute] Guid id)
        {
            var model = _parkAnimalService.DeleteParkAnimal(id);

            return Ok(model);
        }
    }
}
