import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICanadaPostApiResponse } from '../interfaces/canada-post-api-response';

import { environment } from '@environment';
import { getHttpParams } from '../util';

@Injectable()
export class CanadaPostApiService {

  URL: string;
  KEY: string;

  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private _http: HttpClient) {
    this.URL = environment.canada_post_api.URL;
    this.KEY = environment.canada_post_api.KEY;
  }

  search(term: string, params?: any): Observable<ICanadaPostApiResponse> {
    params = getHttpParams({
      Key: this.KEY,
      SearchTerm: term,
      ...params
    });
    return this._http.post<ICanadaPostApiResponse>(this.URL, params, {
      headers: this.headers
    });
  }
}
