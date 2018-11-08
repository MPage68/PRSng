import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

   delete(): void {
    this.productsvc.remove(this.product).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/products/list');
    });
  }

  constructor(
    private route: ActivatedRoute, 
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit() {    
    let id = this.route.snapshot.params.id;     
    this.productsvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.product = resp.data;
    });
  }

}