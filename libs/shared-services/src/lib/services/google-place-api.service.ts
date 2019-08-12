import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environment';
import { google } from 'googleapis';

@Injectable({
  providedIn: 'root'
})
export class GooglePlaceApiService {

  KEY: string;
  URL: string;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  constructor(private _http: HttpClient) {
    this.KEY = environment.google_map_api.KEY;
    this.URL = environment.google_map_api.URL;
  }

  search(term: string, params?) {
    params = {
      input: term,
      key: 'AIzaSyAofiwbUIKdIhuoJXQYweN_UqoSSPhlifw',
      ...params
    };
    return this._http.get(this.URL, { params, headers: this.headers });
  }
}
