import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  prs: PurchaseRequest = new PurchaseRequest();
  title: string = 'PurchaseRequest Create'

  constructor(
    private sys: SystemService,
    private purchaserequestsvc: PurchaseRequestService,
    private router: Router) { }

  ngOnInit() {}

  create() {
    this.prs.user = this.sys.getUser();
    this.purchaserequestsvc.add(this.prs)
    .subscribe(res => {
      if(res.code != '0'){
        alert('Did not save!');
      }
      this.router.navigateByUrl('/purchase-requests/list');
    })
  }
  
}
  


