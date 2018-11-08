import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineItemsService } from '../line-item.service';
import { LineItems } from '../line-item.class';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';
import { PurchaseRequest } from '../../purchase-request/purchase-request.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  prli: LineItems = new LineItems();
  prs: PurchaseRequest[];
  products: Product[];

  save(): void {
    this.prlisvc.add(this.prli).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  constructor(
    private prlisvc: LineItemsService,
    private prsvc: PurchaseRequestService,
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.prlisvc.list().subscribe(resp => {
      console.log("Line items: ", resp.data);
      this.prli = resp.data;
  });

  this.prsvc.list().subscribe(resp => {
    console.log("Requests: ", resp.data);
    this.prs = resp.data;
  });

  this.productsvc.list().subscribe(resp => {
    console.log("Products: ", resp.data);
    this.products = resp.data;
  });

  }

}