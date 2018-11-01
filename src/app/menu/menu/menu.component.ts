import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu('Home', '/home','The Home Page'),
    new Menu('Users','/users/list','The User List'),
    new Menu('Vendor','/vendors/list','The Vendor List'),
    new Menu('Product','/products/list','The Product List'),
    new Menu('About','/about','The About Page'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
