import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemService } from '../system/system.service';
import { Observable } from 'rxjs';
import { PurchaseRequest } from './purchase-request.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  review(id): Observable<JsonResponse> {
    return this.http.get(url + 'Review/' + id) as Observable<JsonResponse>;
  }

  reviews(userid): Observable<JsonResponse> {
    return this.http.get(url + 'Reviewlist/' + userid) as Observable<JsonResponse>;
  }

  list(): Observable<JsonResponse> {    
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }

get(id): Observable<JsonResponse> {
  return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
}

add(pr: PurchaseRequest): Observable<JsonResponse> {
  return this.http.post(url + "Add", pr) as Observable<JsonResponse>;
}

change(pr: PurchaseRequest): Observable<JsonResponse> {
  return this.http.post(url + "Change", pr) as Observable<JsonResponse>;
}

remove(pr: PurchaseRequest): Observable<JsonResponse> {
  return this.http.post(url + "Remove", pr) as Observable<JsonResponse>;
}  

  constructor(private http: HttpClient, private sys: SystemService) { }
}