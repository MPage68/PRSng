import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { User } from '../../user/user.class';
import { PurchaseRequest } from '../../purchase-request/purchase-request.class';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  requests: PurchaseRequest[];
  title: string = 'PurchaseRequest Review';
  sortBy: string = 'id';

  constructor( 
    private requestsvc: PurchaseRequestService,
    private systemsvc: SystemService,
    private router: Router) {}

  ngOnInit() {
    this.requestsvc.review(this.systemsvc.user).subscribe(res => {
      this.requests = res.data;
      console.log(this.systemsvc.user)
    });
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  approve(purchaserequest) {
    this.requestsvc.approve(purchaserequest)
    .subscribe(res => {      
    })
    this.router.navigateByUrl('purchaserequests/list');
  }

  reject(purchaserequest) {
    purchaserequest.reasonForRejection = prompt('Reason for rejection?');
    this.requestsvc.reject(purchaserequest)
    .subscribe(res => {      
    })
    this.router.navigateByUrl('purchaserequests/list');
  }

}