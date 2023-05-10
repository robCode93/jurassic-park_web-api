﻿using jp_backend.Models.Create;
using jp_backend.Models.Details;
using jp_backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace jp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileReferenceController : ControllerBase
    {

        IFileReferenceService _fileReferenceService;

        public FileReferenceController(IFileReferenceService fileReferenceService)
        {
            _fileReferenceService = fileReferenceService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FileReferenceDetails[]))]
        public IActionResult GetAllFileReferences()
        {
            try
            {
                var model = _fileReferenceService.GetAllFileReferences();

                foreach (var fileReference in model)
                {
                    if (fileReference.FileName is not null)
                    {
                        fileReference.DownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = fileReference.Id,
                        });
                    }
                }

                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FileReferenceDetails))]
        public IActionResult GetFileReferenceById([FromRoute] Guid id)
        {
            try
            {
                var model = _fileReferenceService.GetFileReferenceById(id);

                if (model.FileName is not null)
                {
                    model.DownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.Id,
                    });
                }

                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        public async Task<IActionResult> DownloadFileFromDatabase([FromRoute] Guid id)
        {
            try
            {
                var model = _fileReferenceService.GetFileReferenceById(id);
                var provider = new FileExtensionContentTypeProvider();

                if (!provider.TryGetContentType(model.FileName, out var contentType))
                {
                    contentType = "application/octet-stream";
                }

                var bytes = await System.IO.File.ReadAllBytesAsync(model.FileName);
                return File(bytes, contentType, Path.GetFileName(model.FileName));

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // ########## CREATE-Methoden ##########
        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateFileReference(CreateFileReferenceModel createModel)
        {
            try
            {
                var model = _fileReferenceService.CreateFileReference(createModel);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("{subjectType}/[action]/{subjectId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FileReferenceDetails))]
        public IActionResult UploadFileToDatabase(IFormFile file, [FromRoute] string subjectType, [FromRoute] Guid subjectId)
        {
            try
            {
                //using var ms = new MemoryStream();
                var mimeType = file.ContentType;

                //file.CopyTo(ms);

                //ms.Seek(0, SeekOrigin.Begin);
                //ms.Position = 0;

                var model = _fileReferenceService.UploadFileToDatabase(file.OpenReadStream(), mimeType, subjectId, subjectType);

                if (model.FileName is not null)
                {
                    model.DownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.Id,
                    });
                }

                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // ########## DELETE-Methoden ##########
        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeleteFileReference([FromRoute] Guid id)
        {
            try
            {
                var model = _fileReferenceService.DeleteFileReference(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
