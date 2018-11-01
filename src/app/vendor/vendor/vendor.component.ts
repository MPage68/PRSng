import { Component, OnInit } from '@angular/core';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorsvc: VendorService) { }

  ngOnInit() {
    this.vendorsvc.List()
      .subscribe(resp => {
        console.log("Vendors:", resp);
        this.vendors = resp.data;
      });
  }

}