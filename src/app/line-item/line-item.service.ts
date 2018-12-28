import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from './line-item.class';
import { JsonResponse } from '../util/json-response.class';

const url: string = 'http://localhost:8080/api/PurchaseRequestLineItems/';

@Injectable({
  providedIn: 'root'
})
export class LineItemsService {

  login(lineitem: LineItem): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", lineitem) as Observable<JsonResponse>;
  }
   
     list(): Observable<JsonResponse> {
      return this.http.get(url + 'List') as Observable<JsonResponse>;
    }  
 
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/LineItem/' + id) as Observable<JsonResponse>;
  }  
 
  add(lineitem: LineItem): Observable<JsonResponse> {
    return this.http.post(url + "Add", lineitem) as Observable<JsonResponse>;
  }  

  change(lineitem: LineItem): Observable<JsonResponse> {
    return this.http.post(url + "Change", lineitem) as Observable<JsonResponse>;
  }  
 
  remove(lineitem: LineItem): Observable<JsonResponse> {
    return this.http.post(url + "Remove", lineitem) as Observable<JsonResponse>;
  }  
  
  getPrli(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/Prli/"+id) as Observable<JsonResponse>;
  }

  getPrliVendor(id): Observable<JsonResponse> {
    return this.http.get(url+ "List/Vendor/" + id) as Observable<JsonResponse>;
  }
    constructor(private http: HttpClient) { }
}