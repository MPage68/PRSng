import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  request: PurchaseRequest;
  constructor(
    private requestsvc: PurchaseRequestService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   
    let id = this.route.snapshot.params.id;
 
    this.requestsvc.lines(id)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.request = resp.data;
    })
  }

}