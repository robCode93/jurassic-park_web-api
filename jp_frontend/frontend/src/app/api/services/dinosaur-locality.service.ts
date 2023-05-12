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

import { CreateDinosaurLocalityModel } from '../models/create-dinosaur-locality-model';
import { DinosaurLocalityDetails } from '../models/dinosaur-locality-details';
import { ResponseModel } from '../models/response-model';
import { UpdateDinosaurLocalityModel } from '../models/update-dinosaur-locality-model';

@Injectable({
  providedIn: 'root',
})
export class DinosaurLocalityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDinosaurLocalityGetAllLocalitiesGet
   */
  static readonly ApiDinosaurLocalityGetAllLocalitiesGetPath = '/api/DinosaurLocality/GetAllLocalities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityGetAllLocalitiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityGetAllLocalitiesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurLocalityDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityGetAllLocalitiesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurLocalityDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurLocalityGetAllLocalitiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityGetAllLocalitiesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurLocalityDetails>> {

    return this.apiDinosaurLocalityGetAllLocalitiesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurLocalityDetails>>) => r.body as Array<DinosaurLocalityDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityGetAllLocalitiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityGetAllLocalitiesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurLocalityDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityGetAllLocalitiesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurLocalityDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurLocalityGetAllLocalitiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityGetAllLocalitiesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurLocalityDetails>> {

    return this.apiDinosaurLocalityGetAllLocalitiesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurLocalityDetails>>) => r.body as Array<DinosaurLocalityDetails>)
    );
  }

  /**
   * Path part for operation apiDinosaurLocalityIdGetLocalityByIdGet
   */
  static readonly ApiDinosaurLocalityIdGetLocalityByIdGetPath = '/api/DinosaurLocality/{id}/GetLocalityById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityIdGetLocalityByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdGetLocalityByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurLocalityDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityIdGetLocalityByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurLocalityDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurLocalityIdGetLocalityByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdGetLocalityByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurLocalityDetails> {

    return this.apiDinosaurLocalityIdGetLocalityByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurLocalityDetails>) => r.body as DinosaurLocalityDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityIdGetLocalityByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdGetLocalityByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurLocalityDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityIdGetLocalityByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurLocalityDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurLocalityIdGetLocalityByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdGetLocalityByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurLocalityDetails> {

    return this.apiDinosaurLocalityIdGetLocalityByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurLocalityDetails>) => r.body as DinosaurLocalityDetails)
    );
  }

  /**
   * Path part for operation apiDinosaurLocalityCreateLocalityGet
   */
  static readonly ApiDinosaurLocalityCreateLocalityGetPath = '/api/DinosaurLocality/CreateLocality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityCreateLocalityGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityCreateLocalityGet$Plain$Response(params?: {
    body?: CreateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityCreateLocalityGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurLocalityCreateLocalityGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityCreateLocalityGet$Plain(params?: {
    body?: CreateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurLocalityCreateLocalityGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityCreateLocalityGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityCreateLocalityGet$Json$Response(params?: {
    body?: CreateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityCreateLocalityGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurLocalityCreateLocalityGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityCreateLocalityGet$Json(params?: {
    body?: CreateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurLocalityCreateLocalityGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurLocalityIdUpdateLocalityGet
   */
  static readonly ApiDinosaurLocalityIdUpdateLocalityGetPath = '/api/DinosaurLocality/{id}/UpdateLocality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityIdUpdateLocalityGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityIdUpdateLocalityGet$Plain$Response(params: {
    id: string;
    body?: UpdateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityIdUpdateLocalityGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurLocalityIdUpdateLocalityGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityIdUpdateLocalityGet$Plain(params: {
    id: string;
    body?: UpdateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurLocalityIdUpdateLocalityGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityIdUpdateLocalityGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityIdUpdateLocalityGet$Json$Response(params: {
    id: string;
    body?: UpdateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityIdUpdateLocalityGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurLocalityIdUpdateLocalityGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurLocalityIdUpdateLocalityGet$Json(params: {
    id: string;
    body?: UpdateDinosaurLocalityModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurLocalityIdUpdateLocalityGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurLocalityIdDeleteLocalityGet
   */
  static readonly ApiDinosaurLocalityIdDeleteLocalityGetPath = '/api/DinosaurLocality/{id}/DeleteLocality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityIdDeleteLocalityGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdDeleteLocalityGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityIdDeleteLocalityGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurLocalityIdDeleteLocalityGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdDeleteLocalityGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurLocalityIdDeleteLocalityGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurLocalityIdDeleteLocalityGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdDeleteLocalityGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurLocalityService.ApiDinosaurLocalityIdDeleteLocalityGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurLocalityIdDeleteLocalityGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurLocalityIdDeleteLocalityGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurLocalityIdDeleteLocalityGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
