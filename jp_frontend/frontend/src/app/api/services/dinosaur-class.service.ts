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

import { CreateDinosaurClassModel } from '../models/create-dinosaur-class-model';
import { DinosaurClassDetails } from '../models/dinosaur-class-details';
import { ResponseModel } from '../models/response-model';
import { UpdateDinosaurClassModel } from '../models/update-dinosaur-class-model';

@Injectable({
  providedIn: 'root',
})
export class DinosaurClassService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDinosaurClassGetAllDinosaurClassesGet
   */
  static readonly ApiDinosaurClassGetAllDinosaurClassesGetPath = '/api/DinosaurClass/GetAllDinosaurClasses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassGetAllDinosaurClassesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassGetAllDinosaurClassesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurClassDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassGetAllDinosaurClassesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurClassDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurClassGetAllDinosaurClassesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassGetAllDinosaurClassesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurClassDetails>> {

    return this.apiDinosaurClassGetAllDinosaurClassesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurClassDetails>>) => r.body as Array<DinosaurClassDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassGetAllDinosaurClassesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassGetAllDinosaurClassesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurClassDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassGetAllDinosaurClassesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurClassDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurClassGetAllDinosaurClassesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassGetAllDinosaurClassesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurClassDetails>> {

    return this.apiDinosaurClassGetAllDinosaurClassesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurClassDetails>>) => r.body as Array<DinosaurClassDetails>)
    );
  }

  /**
   * Path part for operation apiDinosaurClassIdGetDinosaurClassByIdGet
   */
  static readonly ApiDinosaurClassIdGetDinosaurClassByIdGetPath = '/api/DinosaurClass/{id}/GetDinosaurClassById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassIdGetDinosaurClassByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdGetDinosaurClassByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurClassDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassIdGetDinosaurClassByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurClassDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurClassIdGetDinosaurClassByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdGetDinosaurClassByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurClassDetails> {

    return this.apiDinosaurClassIdGetDinosaurClassByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurClassDetails>) => r.body as DinosaurClassDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassIdGetDinosaurClassByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdGetDinosaurClassByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurClassDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassIdGetDinosaurClassByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurClassDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurClassIdGetDinosaurClassByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdGetDinosaurClassByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurClassDetails> {

    return this.apiDinosaurClassIdGetDinosaurClassByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurClassDetails>) => r.body as DinosaurClassDetails)
    );
  }

  /**
   * Path part for operation apiDinosaurClassCreateDinosaurClassGet
   */
  static readonly ApiDinosaurClassCreateDinosaurClassGetPath = '/api/DinosaurClass/CreateDinosaurClass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassCreateDinosaurClassGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassCreateDinosaurClassGet$Plain$Response(params?: {
    body?: CreateDinosaurClassModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassCreateDinosaurClassGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurClassCreateDinosaurClassGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassCreateDinosaurClassGet$Plain(params?: {
    body?: CreateDinosaurClassModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurClassCreateDinosaurClassGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassCreateDinosaurClassGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassCreateDinosaurClassGet$Json$Response(params?: {
    body?: CreateDinosaurClassModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassCreateDinosaurClassGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurClassCreateDinosaurClassGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassCreateDinosaurClassGet$Json(params?: {
    body?: CreateDinosaurClassModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurClassCreateDinosaurClassGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurClassIdUpdateDinosaurClassGet
   */
  static readonly ApiDinosaurClassIdUpdateDinosaurClassGetPath = '/api/DinosaurClass/{id}/UpdateDinosaurClass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassIdUpdateDinosaurClassGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassIdUpdateDinosaurClassGet$Plain$Response(params: {
    id: string;
    body?: UpdateDinosaurClassModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassIdUpdateDinosaurClassGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurClassIdUpdateDinosaurClassGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassIdUpdateDinosaurClassGet$Plain(params: {
    id: string;
    body?: UpdateDinosaurClassModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurClassIdUpdateDinosaurClassGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassIdUpdateDinosaurClassGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassIdUpdateDinosaurClassGet$Json$Response(params: {
    id: string;
    body?: UpdateDinosaurClassModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassIdUpdateDinosaurClassGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurClassIdUpdateDinosaurClassGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurClassIdUpdateDinosaurClassGet$Json(params: {
    id: string;
    body?: UpdateDinosaurClassModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurClassIdUpdateDinosaurClassGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurClassIdDeleteDinosaurClassGet
   */
  static readonly ApiDinosaurClassIdDeleteDinosaurClassGetPath = '/api/DinosaurClass/{id}/DeleteDinosaurClass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassIdDeleteDinosaurClassGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdDeleteDinosaurClassGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassIdDeleteDinosaurClassGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurClassIdDeleteDinosaurClassGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdDeleteDinosaurClassGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurClassIdDeleteDinosaurClassGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurClassIdDeleteDinosaurClassGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdDeleteDinosaurClassGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurClassService.ApiDinosaurClassIdDeleteDinosaurClassGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurClassIdDeleteDinosaurClassGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurClassIdDeleteDinosaurClassGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurClassIdDeleteDinosaurClassGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
