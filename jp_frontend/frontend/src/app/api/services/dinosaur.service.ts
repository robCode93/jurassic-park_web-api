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

import { CreateDinosaurModel } from '../models/create-dinosaur-model';
import { DinosaurDetails } from '../models/dinosaur-details';
import { ResponseModel } from '../models/response-model';
import { UpdateDinosaurModel } from '../models/update-dinosaur-model';

@Injectable({
  providedIn: 'root',
})
export class DinosaurService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDinosaurGetAllDinosaursGet
   */
  static readonly ApiDinosaurGetAllDinosaursGetPath = '/api/Dinosaur/GetAllDinosaurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurGetAllDinosaursGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurGetAllDinosaursGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurGetAllDinosaursGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurGetAllDinosaursGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurGetAllDinosaursGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurDetails>> {

    return this.apiDinosaurGetAllDinosaursGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurDetails>>) => r.body as Array<DinosaurDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurGetAllDinosaursGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurGetAllDinosaursGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DinosaurDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurGetAllDinosaursGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DinosaurDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurGetAllDinosaursGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurGetAllDinosaursGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<DinosaurDetails>> {

    return this.apiDinosaurGetAllDinosaursGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DinosaurDetails>>) => r.body as Array<DinosaurDetails>)
    );
  }

  /**
   * Path part for operation apiDinosaurIdGetDinosaurByIdGet
   */
  static readonly ApiDinosaurIdGetDinosaurByIdGetPath = '/api/Dinosaur/{id}/GetDinosaurById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurIdGetDinosaurByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdGetDinosaurByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurIdGetDinosaurByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurIdGetDinosaurByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdGetDinosaurByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurDetails> {

    return this.apiDinosaurIdGetDinosaurByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurDetails>) => r.body as DinosaurDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurIdGetDinosaurByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdGetDinosaurByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DinosaurDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurIdGetDinosaurByIdGetPath, 'get');
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
        return r as StrictHttpResponse<DinosaurDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDinosaurIdGetDinosaurByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdGetDinosaurByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<DinosaurDetails> {

    return this.apiDinosaurIdGetDinosaurByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DinosaurDetails>) => r.body as DinosaurDetails)
    );
  }

  /**
   * Path part for operation apiDinosaurCreateDinosaurGet
   */
  static readonly ApiDinosaurCreateDinosaurGetPath = '/api/Dinosaur/CreateDinosaur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurCreateDinosaurGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurCreateDinosaurGet$Plain$Response(params?: {
    body?: CreateDinosaurModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurCreateDinosaurGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurCreateDinosaurGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurCreateDinosaurGet$Plain(params?: {
    body?: CreateDinosaurModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurCreateDinosaurGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurCreateDinosaurGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurCreateDinosaurGet$Json$Response(params?: {
    body?: CreateDinosaurModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurCreateDinosaurGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurCreateDinosaurGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurCreateDinosaurGet$Json(params?: {
    body?: CreateDinosaurModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurCreateDinosaurGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurIdUpdateDinosaurGet
   */
  static readonly ApiDinosaurIdUpdateDinosaurGetPath = '/api/Dinosaur/{id}/UpdateDinosaur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurIdUpdateDinosaurGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurIdUpdateDinosaurGet$Plain$Response(params: {
    id: string;
    body?: UpdateDinosaurModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurIdUpdateDinosaurGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurIdUpdateDinosaurGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurIdUpdateDinosaurGet$Plain(params: {
    id: string;
    body?: UpdateDinosaurModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurIdUpdateDinosaurGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurIdUpdateDinosaurGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurIdUpdateDinosaurGet$Json$Response(params: {
    id: string;
    body?: UpdateDinosaurModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurIdUpdateDinosaurGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurIdUpdateDinosaurGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDinosaurIdUpdateDinosaurGet$Json(params: {
    id: string;
    body?: UpdateDinosaurModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurIdUpdateDinosaurGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiDinosaurIdDeleteDinosaurGet
   */
  static readonly ApiDinosaurIdDeleteDinosaurGetPath = '/api/Dinosaur/{id}/DeleteDinosaur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurIdDeleteDinosaurGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdDeleteDinosaurGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurIdDeleteDinosaurGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurIdDeleteDinosaurGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdDeleteDinosaurGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurIdDeleteDinosaurGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDinosaurIdDeleteDinosaurGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdDeleteDinosaurGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, DinosaurService.ApiDinosaurIdDeleteDinosaurGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDinosaurIdDeleteDinosaurGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDinosaurIdDeleteDinosaurGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiDinosaurIdDeleteDinosaurGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
