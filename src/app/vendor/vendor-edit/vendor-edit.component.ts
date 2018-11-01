import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

//import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

vendor: Vendor;

save(): void {
  this.vendorsvc.Change(this.vendor)
  .subscribe(resp => {
    console.log("resp:", resp);
    this.router.navigateByUrl('/vendor/list');
  })

}

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.Get(id)
      .subscribe(resp => {
        console.log("resp", resp);
        this.vendor = resp.data;
      });
  }
}