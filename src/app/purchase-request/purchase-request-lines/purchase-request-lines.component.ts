import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  purchaserequest: PurchaseRequest;

  constructor(
    private sys: SystemService,
    private requestsvc: PurchaseRequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("PrId:", id);
    this.requestsvc.get(id)
      .subscribe(resp => {
        console.log("Request:", resp);
        this.purchaserequest = resp.data;
      });
  }

}