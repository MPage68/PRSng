import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { User} from '../../user/user.class';
import { SystemService } from '../../system/system.service';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  purchaserequest: PurchaseRequest = new PurchaseRequest();

  user: User = null;  
  users: User[];
   
  save(): void {
   this.prsvc.add(this.purchaserequest).subscribe(resp => {
     console.log("response: ", resp);
     this.router.navigateByUrl('/prs/create');
   });
  }

  constructor(
    private route: ActivatedRoute, 
    private prsvc: PurchaseRequestService,
    private router: Router,
    private sys: SystemService,

  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.purchaserequest.userId = this.sys.user.ID;

  }

}