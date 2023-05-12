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

import { CreateDinosaurHabitatModel } from '../models/create-dinosaur-habitat-model';
import { DinosaurHabitatDetails } from '../models/dinosaur-habitat-details';
import { ResponseModel } from '../models/response-model';
import { UpdateDinosaurHabitatModel } from '../models/update-dinosaur-habitat-model';

@Injectable({
  providedIn: 'root',
})
export class DinosaurHabitatService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDinosaurHabitatGetAllHabitatsGet
   */
  static readonly ApiDinosaurHabitatGetAllHabitatsGetPath = '/api/DinosaurHabitat/GetAllHabitats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatGetAllHabitatsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatGetAllHabitatsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurHabitatDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatGetAllHabitatsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurHabitatDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurHabitatGetAllHabitatsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatGetAllHabitatsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurHabitatDetails>> {

    return this.apiDinosaurHabitatGetAllHabitatsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurHabitatDetails>>) => r.body as Array<DinosaurHabitatDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatGetAllHabitatsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatGetAllHabitatsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurHabitatDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatGetAllHabitatsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurHabitatDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurHabitatGetAllHabitatsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatGetAllHabitatsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurHabitatDetails>> {

    return this.apiDinosaurHabitatGetAllHabitatsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurHabitatDetails>>) => r.body as Array<DinosaurHabitatDetails>)
    );
  }

  /**
   * Path part for operation apiDinosaurHabitatIdGetHabitatByIdGet
   */
  static readonly ApiDinosaurHabitatIdGetHabitatByIdGetPath = '/api/DinosaurHabitat/{id}/GetHabitatById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatIdGetHabitatByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdGetHabitatByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurHabitatDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatIdGetHabitatByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurHabitatDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurHabitatIdGetHabitatByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdGetHabitatByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurHabitatDetails> {

    return this.apiDinosaurHabitatIdGetHabitatByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurHabitatDetails>) => r.body as DinosaurHabitatDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatIdGetHabitatByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdGetHabitatByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurHabitatDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatIdGetHabitatByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurHabitatDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurHabitatIdGetHabitatByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdGetHabitatByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurHabitatDetails> {

    return this.apiDinosaurHabitatIdGetHabitatByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurHabitatDetails>) => r.body as DinosaurHabitatDetails)
    );
  }

  /**
   * Path part for operation apiDinosaurHabitatCreateHabitatGet
   */
  static readonly ApiDinosaurHabitatCreateHabitatGetPath = '/api/DinosaurHabitat/CreateHabitat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatCreateHabitatGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatCreateHabitatGet$Plain$Response(params?: {
    body?: CreateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatCreateHabitatGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurHabitatCreateHabitatGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatCreateHabitatGet$Plain(params?: {
    body?: CreateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurHabitatCreateHabitatGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatCreateHabitatGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatCreateHabitatGet$Json$Response(params?: {
    body?: CreateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatCreateHabitatGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurHabitatCreateHabitatGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatCreateHabitatGet$Json(params?: {
    body?: CreateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurHabitatCreateHabitatGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurHabitatIdUpdateHabitatGet
   */
  static readonly ApiDinosaurHabitatIdUpdateHabitatGetPath = '/api/DinosaurHabitat/{id}/UpdateHabitat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatIdUpdateHabitatGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatIdUpdateHabitatGet$Plain$Response(params: {
    id: string;
    body?: UpdateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatIdUpdateHabitatGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurHabitatIdUpdateHabitatGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatIdUpdateHabitatGet$Plain(params: {
    id: string;
    body?: UpdateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurHabitatIdUpdateHabitatGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatIdUpdateHabitatGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatIdUpdateHabitatGet$Json$Response(params: {
    id: string;
    body?: UpdateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatIdUpdateHabitatGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurHabitatIdUpdateHabitatGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurHabitatIdUpdateHabitatGet$Json(params: {
    id: string;
    body?: UpdateDinosaurHabitatModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurHabitatIdUpdateHabitatGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurHabitatIdDeleteHabitatGet
   */
  static readonly ApiDinosaurHabitatIdDeleteHabitatGetPath = '/api/DinosaurHabitat/{id}/DeleteHabitat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatIdDeleteHabitatGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdDeleteHabitatGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatIdDeleteHabitatGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurHabitatIdDeleteHabitatGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdDeleteHabitatGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurHabitatIdDeleteHabitatGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurHabitatIdDeleteHabitatGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdDeleteHabitatGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurHabitatService.ApiDinosaurHabitatIdDeleteHabitatGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurHabitatIdDeleteHabitatGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurHabitatIdDeleteHabitatGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurHabitatIdDeleteHabitatGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
