import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LineItemsService } from '../line-item.service';
import { LineItems } from '../line-item.class';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';
import { PurchaseRequest } from '../../purchase-request/purchase-request.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {

  prli: LineItems;
  prs: PurchaseRequest[];
  products: Product[];

  save(): void {
    this.prlisvc.change(this.prli).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  compareFn(v1, v2) {
    return v1.id === v2.id;
  }

  constructor(
    private prlisvc: LineItemsService, 
    private prsvc: PurchaseRequestService, 
    private productsvc: ProductService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.prlisvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.prli = resp.data;
  });

  this.prsvc.list().subscribe(resp => {
    console.log("response: ", resp);
    this.prs = resp.data;
  });

  this.productsvc.list().subscribe(resp => {
    console.log("response: ", resp);
    this.products = resp.data;
  });
  }

}