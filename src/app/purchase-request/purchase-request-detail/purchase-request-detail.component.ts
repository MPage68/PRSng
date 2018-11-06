import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  pr: PurchaseRequest;

  delete(): void {
    this.prsvc.remove(this.pr).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/prs/list');
    });
  }

  constructor(
    private route: ActivatedRoute, 
    private prsvc: PurchaseRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id; 
    this.prsvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.pr = resp.data;
    });
  }

}