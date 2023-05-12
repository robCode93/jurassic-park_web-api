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

import { CreatePeriodModel } from '../models/create-period-model';
import { PeriodDetails } from '../models/period-details';
import { ResponseModel } from '../models/response-model';
import { UpdatePeriodModel } from '../models/update-period-model';

@Injectable({
  providedIn: 'root',
})
export class PeriodService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPeriodGetAllPeriodsGet
   */
  static readonly ApiPeriodGetAllPeriodsGetPath = '/api/Period/GetAllPeriods';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodGetAllPeriodsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodGetAllPeriodsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PeriodDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodGetAllPeriodsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PeriodDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeriodGetAllPeriodsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodGetAllPeriodsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<PeriodDetails>> {

    return this.apiPeriodGetAllPeriodsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PeriodDetails>>) => r.body as Array<PeriodDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodGetAllPeriodsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodGetAllPeriodsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PeriodDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodGetAllPeriodsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PeriodDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeriodGetAllPeriodsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodGetAllPeriodsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<PeriodDetails>> {

    return this.apiPeriodGetAllPeriodsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PeriodDetails>>) => r.body as Array<PeriodDetails>)
    );
  }

  /**
   * Path part for operation apiPeriodIdGetPeriodByIdGet
   */
  static readonly ApiPeriodIdGetPeriodByIdGetPath = '/api/Period/{id}/GetPeriodById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodIdGetPeriodByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdGetPeriodByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PeriodDetails>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodIdGetPeriodByIdGetPath, 'get');
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
        return r as StrictHttpResponse<PeriodDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeriodIdGetPeriodByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdGetPeriodByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<PeriodDetails> {

    return this.apiPeriodIdGetPeriodByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PeriodDetails>) => r.body as PeriodDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodIdGetPeriodByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdGetPeriodByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PeriodDetails>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodIdGetPeriodByIdGetPath, 'get');
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
        return r as StrictHttpResponse<PeriodDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeriodIdGetPeriodByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdGetPeriodByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<PeriodDetails> {

    return this.apiPeriodIdGetPeriodByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PeriodDetails>) => r.body as PeriodDetails)
    );
  }

  /**
   * Path part for operation apiPeriodCreatePeriodGet
   */
  static readonly ApiPeriodCreatePeriodGetPath = '/api/Period/CreatePeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodCreatePeriodGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodCreatePeriodGet$Plain$Response(params?: {
    body?: CreatePeriodModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodCreatePeriodGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPeriodCreatePeriodGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodCreatePeriodGet$Plain(params?: {
    body?: CreatePeriodModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiPeriodCreatePeriodGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodCreatePeriodGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodCreatePeriodGet$Json$Response(params?: {
    body?: CreatePeriodModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodCreatePeriodGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPeriodCreatePeriodGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodCreatePeriodGet$Json(params?: {
    body?: CreatePeriodModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiPeriodCreatePeriodGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiPeriodIdUpdatePeriodGet
   */
  static readonly ApiPeriodIdUpdatePeriodGetPath = '/api/Period/{id}/UpdatePeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodIdUpdatePeriodGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodIdUpdatePeriodGet$Plain$Response(params: {
    id: string;
    body?: UpdatePeriodModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodIdUpdatePeriodGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPeriodIdUpdatePeriodGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodIdUpdatePeriodGet$Plain(params: {
    id: string;
    body?: UpdatePeriodModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiPeriodIdUpdatePeriodGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodIdUpdatePeriodGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodIdUpdatePeriodGet$Json$Response(params: {
    id: string;
    body?: UpdatePeriodModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodIdUpdatePeriodGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPeriodIdUpdatePeriodGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeriodIdUpdatePeriodGet$Json(params: {
    id: string;
    body?: UpdatePeriodModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiPeriodIdUpdatePeriodGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiPeriodIdDeletePeriodGet
   */
  static readonly ApiPeriodIdDeletePeriodGetPath = '/api/Period/{id}/DeletePeriod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodIdDeletePeriodGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdDeletePeriodGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodIdDeletePeriodGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPeriodIdDeletePeriodGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdDeletePeriodGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiPeriodIdDeletePeriodGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeriodIdDeletePeriodGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdDeletePeriodGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, PeriodService.ApiPeriodIdDeletePeriodGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPeriodIdDeletePeriodGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeriodIdDeletePeriodGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiPeriodIdDeletePeriodGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
