import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
  }

}