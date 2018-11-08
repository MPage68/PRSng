import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

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