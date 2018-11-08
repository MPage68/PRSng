import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LineItem } from './line-item.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/api/PurchaseRequestLineItems/';

@Injectable({
  providedIn: 'root'
})
export class LineItemsService {
   
     list(): Observable<JsonResponse> {
      return this.http.get(url + 'List') as Observable<JsonResponse>;
    }  
 
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
  }  
 
  add(prli: LineItem): Observable<JsonResponse> {
    return this.http.post(url + "Add", prli) as Observable<JsonResponse>;
  }  

  change(prli: LineItem): Observable<JsonResponse> {
    return this.http.post(url + "Change", prli) as Observable<JsonResponse>;
  }  
 
  remove(prli: LineItem): Observable<JsonResponse> {
    return this.http.post(url + "Remove", prli) as Observable<JsonResponse>;
  }    
   
    constructor(private http: HttpClient) { }
}