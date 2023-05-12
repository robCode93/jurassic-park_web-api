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

import { CreateEmployeeModel } from '../models/create-employee-model';
import { EmployeeDetails } from '../models/employee-details';
import { ResponseModel } from '../models/response-model';
import { UpdateEmployeeModel } from '../models/update-employee-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiEmployeeGetAllEmployeesGet
   */
  static readonly ApiEmployeeGetAllEmployeesGetPath = '/api/Employee/GetAllEmployees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeGetAllEmployeesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeGetAllEmployeesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EmployeeDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeGetAllEmployeesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmployeeGetAllEmployeesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeGetAllEmployeesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<EmployeeDetails>> {

    return this.apiEmployeeGetAllEmployeesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EmployeeDetails>>) => r.body as Array<EmployeeDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeGetAllEmployeesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeGetAllEmployeesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<EmployeeDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeGetAllEmployeesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmployeeGetAllEmployeesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeGetAllEmployeesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<EmployeeDetails>> {

    return this.apiEmployeeGetAllEmployeesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<EmployeeDetails>>) => r.body as Array<EmployeeDetails>)
    );
  }

  /**
   * Path part for operation apiEmployeeIdGetEmployeeByIdGet
   */
  static readonly ApiEmployeeIdGetEmployeeByIdGetPath = '/api/Employee/{id}/GetEmployeeById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeIdGetEmployeeByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdGetEmployeeByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EmployeeDetails>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeIdGetEmployeeByIdGetPath, 'get');
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
        return r as StrictHttpResponse<EmployeeDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmployeeIdGetEmployeeByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdGetEmployeeByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EmployeeDetails> {

    return this.apiEmployeeIdGetEmployeeByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<EmployeeDetails>) => r.body as EmployeeDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeIdGetEmployeeByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdGetEmployeeByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EmployeeDetails>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeIdGetEmployeeByIdGetPath, 'get');
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
        return r as StrictHttpResponse<EmployeeDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmployeeIdGetEmployeeByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdGetEmployeeByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<EmployeeDetails> {

    return this.apiEmployeeIdGetEmployeeByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EmployeeDetails>) => r.body as EmployeeDetails)
    );
  }

  /**
   * Path part for operation apiEmployeeCreateEmployeeGet
   */
  static readonly ApiEmployeeCreateEmployeeGetPath = '/api/Employee/CreateEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeCreateEmployeeGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeCreateEmployeeGet$Plain$Response(params?: {
    body?: CreateEmployeeModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeCreateEmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeeCreateEmployeeGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeCreateEmployeeGet$Plain(params?: {
    body?: CreateEmployeeModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiEmployeeCreateEmployeeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeCreateEmployeeGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeCreateEmployeeGet$Json$Response(params?: {
    body?: CreateEmployeeModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeCreateEmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeeCreateEmployeeGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeCreateEmployeeGet$Json(params?: {
    body?: CreateEmployeeModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiEmployeeCreateEmployeeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiEmployeeIdUpdateEmployeeGet
   */
  static readonly ApiEmployeeIdUpdateEmployeeGetPath = '/api/Employee/{id}/UpdateEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeIdUpdateEmployeeGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeIdUpdateEmployeeGet$Plain$Response(params: {
    id: string;
    body?: UpdateEmployeeModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeIdUpdateEmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeeIdUpdateEmployeeGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeIdUpdateEmployeeGet$Plain(params: {
    id: string;
    body?: UpdateEmployeeModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiEmployeeIdUpdateEmployeeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeIdUpdateEmployeeGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeIdUpdateEmployeeGet$Json$Response(params: {
    id: string;
    body?: UpdateEmployeeModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeIdUpdateEmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeeIdUpdateEmployeeGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeeIdUpdateEmployeeGet$Json(params: {
    id: string;
    body?: UpdateEmployeeModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiEmployeeIdUpdateEmployeeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiEmployeeIdDeleteEmployeeGet
   */
  static readonly ApiEmployeeIdDeleteEmployeeGetPath = '/api/Employee/{id}/DeleteEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeIdDeleteEmployeeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdDeleteEmployeeGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeIdDeleteEmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeeIdDeleteEmployeeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdDeleteEmployeeGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiEmployeeIdDeleteEmployeeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeeIdDeleteEmployeeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdDeleteEmployeeGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.ApiEmployeeIdDeleteEmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiEmployeeIdDeleteEmployeeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeeIdDeleteEmployeeGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiEmployeeIdDeleteEmployeeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
