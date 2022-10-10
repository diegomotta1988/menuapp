import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

export enum STATUS_CODES_ENUM {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    header: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, {
      headers: header,
      params: params,
    });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  put(
    path: string,
    body: Object = {},
    header: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}`, body, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  patch(
    path: string,
    body: Object = {},
    header: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.patch(`${this.apiUrl}${path}`, body, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  post(
    path: string,
    body: Object = {},
    header: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  delete(
    path: string,
    header: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`, { headers: header });
    // .pipe(catchError((error) => this.handleError(error)));
  }

  // private handleError(error: any) {
  //   if (error instanceof HttpErrorResponse) {
  //     switch (error.status) {
  //       case STATUS_CODES_ENUM.UNAUTHORIZED:
  //         break;
  //       case STATUS_CODES_ENUM.FORBIDDEN:
  //         this.router.navigateByUrl('');
  //         break;
  //       case STATUS_CODES_ENUM.NOT_FOUND:
  //         this.router.navigateByUrl(CommonUrls.PAGE_NOT_FOUND_URL);
  //         break;
  //       case STATUS_CODES_ENUM.INTERNAL_SERVER_ERROR:
  //         break;

  //       default:
  //         return new Error(error.message);
  //     }
  //     return EMPTY;
  //   }
  // }
}
