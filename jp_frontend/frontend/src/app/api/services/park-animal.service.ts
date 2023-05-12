/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateParkAnimalModel } from '../models/create-park-animal-model';
import { ParkAnimalDetails } from '../models/park-animal-details';
import { ResponseModel } from '../models/response-model';
import { UpdateParkAnimalModel } from '../models/update-park-animal-model';

@Injectable({
  providedIn: 'root',
})
export class ParkAnimalService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiParkAnimalGetAllAnimalsGet
   */
  static readonly ApiParkAnimalGetAllAnimalsGetPath = '/api/ParkAnimal/GetAllAnimals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalGetAllAnimalsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalGetAllAnimalsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ParkAnimalDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalGetAllAnimalsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ParkAnimalDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalGetAllAnimalsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalGetAllAnimalsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<ParkAnimalDetails>> {

    return this.apiParkAnimalGetAllAnimalsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ParkAnimalDetails>>) => r.body as Array<ParkAnimalDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalGetAllAnimalsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalGetAllAnimalsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ParkAnimalDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalGetAllAnimalsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ParkAnimalDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalGetAllAnimalsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalGetAllAnimalsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<ParkAnimalDetails>> {

    return this.apiParkAnimalGetAllAnimalsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ParkAnimalDetails>>) => r.body as Array<ParkAnimalDetails>)
    );
  }

  /**
   * Path part for operation apiParkAnimalIdGetAnimalsByHabitatIdGet
   */
  static readonly ApiParkAnimalIdGetAnimalsByHabitatIdGetPath = '/api/ParkAnimal/{id}/GetAnimalsByHabitatId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdGetAnimalsByHabitatIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalsByHabitatIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ParkAnimalDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdGetAnimalsByHabitatIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ParkAnimalDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdGetAnimalsByHabitatIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalsByHabitatIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<ParkAnimalDetails>> {

    return this.apiParkAnimalIdGetAnimalsByHabitatIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ParkAnimalDetails>>) => r.body as Array<ParkAnimalDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdGetAnimalsByHabitatIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalsByHabitatIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ParkAnimalDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdGetAnimalsByHabitatIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ParkAnimalDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdGetAnimalsByHabitatIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalsByHabitatIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<Array<ParkAnimalDetails>> {

    return this.apiParkAnimalIdGetAnimalsByHabitatIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ParkAnimalDetails>>) => r.body as Array<ParkAnimalDetails>)
    );
  }

  /**
   * Path part for operation apiParkAnimalIdGetAnimalByIdGet
   */
  static readonly ApiParkAnimalIdGetAnimalByIdGetPath = '/api/ParkAnimal/{id}/GetAnimalById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdGetAnimalByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParkAnimalDetails>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdGetAnimalByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParkAnimalDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdGetAnimalByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ParkAnimalDetails> {

    return this.apiParkAnimalIdGetAnimalByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParkAnimalDetails>) => r.body as ParkAnimalDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdGetAnimalByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParkAnimalDetails>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdGetAnimalByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParkAnimalDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdGetAnimalByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdGetAnimalByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ParkAnimalDetails> {

    return this.apiParkAnimalIdGetAnimalByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParkAnimalDetails>) => r.body as ParkAnimalDetails)
    );
  }

  /**
   * Path part for operation apiParkAnimalCreateAnimalGet
   */
  static readonly ApiParkAnimalCreateAnimalGetPath = '/api/ParkAnimal/CreateAnimal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalCreateAnimalGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalCreateAnimalGet$Plain$Response(params?: {
    body?: CreateParkAnimalModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalCreateAnimalGetPath, 'get');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalCreateAnimalGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalCreateAnimalGet$Plain(params?: {
    body?: CreateParkAnimalModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiParkAnimalCreateAnimalGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalCreateAnimalGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalCreateAnimalGet$Json$Response(params?: {
    body?: CreateParkAnimalModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalCreateAnimalGetPath, 'get');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalCreateAnimalGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalCreateAnimalGet$Json(params?: {
    body?: CreateParkAnimalModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiParkAnimalCreateAnimalGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiParkAnimalIdUpdateAnimalGet
   */
  static readonly ApiParkAnimalIdUpdateAnimalGetPath = '/api/ParkAnimal/{id}/UpdateAnimal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdUpdateAnimalGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalIdUpdateAnimalGet$Plain$Response(params: {
    id: string;
    body?: UpdateParkAnimalModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdUpdateAnimalGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdUpdateAnimalGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalIdUpdateAnimalGet$Plain(params: {
    id: string;
    body?: UpdateParkAnimalModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiParkAnimalIdUpdateAnimalGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdUpdateAnimalGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalIdUpdateAnimalGet$Json$Response(params: {
    id: string;
    body?: UpdateParkAnimalModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdUpdateAnimalGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdUpdateAnimalGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParkAnimalIdUpdateAnimalGet$Json(params: {
    id: string;
    body?: UpdateParkAnimalModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiParkAnimalIdUpdateAnimalGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiParkAnimalIdDeleteAnimalGet
   */
  static readonly ApiParkAnimalIdDeleteAnimalGetPath = '/api/ParkAnimal/{id}/DeleteAnimal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdDeleteAnimalGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdDeleteAnimalGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdDeleteAnimalGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdDeleteAnimalGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdDeleteAnimalGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiParkAnimalIdDeleteAnimalGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParkAnimalIdDeleteAnimalGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdDeleteAnimalGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, ParkAnimalService.ApiParkAnimalIdDeleteAnimalGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParkAnimalIdDeleteAnimalGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParkAnimalIdDeleteAnimalGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiParkAnimalIdDeleteAnimalGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
