import { Component, OnInit } from '@angular/core';

import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-review-list',
  templateUrl: './purchase-request-review-list.component.html',
  styleUrls: ['./purchase-request-review-list.component.css']
})
export class PurchaseRequestReviewListComponent implements OnInit {

  userid: number;
  requests: Request[];

  constructor(
    private sys: SystemService,
    private requestsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    let userid = (this.sys.isLoggedIn) ? this.sys.user.ID : 0;
    this.requestsvc.reviews(userid)
      .subscribe(resp => {
        console.log("Requests:", resp);
        this.requests = resp.data;
      });
    
  }

}