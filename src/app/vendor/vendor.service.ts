import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vendor } from './vendor.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/Vendor/';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  List(): Observable<JsonResponse> {
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }
  Get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
  }
  Create(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url + 'Create', vendor) as Observable<JsonResponse>;
  }
  Change(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url + 'Change', vendor) as Observable<JsonResponse>;
  }
  Remove(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url + 'Remove', vendor) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) { }
}
