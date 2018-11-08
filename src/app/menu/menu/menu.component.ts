import { Component, OnInit } from '@angular/core';
import {SystemService} from '../../system/system.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name: string;
  
  menus: Menu[] = [
    new Menu("Home", "/home", "Home Page"),
    new Menu("About", "/about", "About Page"),
    new Menu("Users", "/users/list", "User List"),
    new Menu("Vendors", "/vendors/list", "Vendor List"),
    new Menu("Products", "/products/list", "Product List"),
    new Menu("Purchase Requests", "/prs/list", "Request List"),
    new Menu("Line Items", "/lineitems/create", "Line Items list"),
    new Menu("Login", "/users/login", "Login page"),
  ]

  constructor(  
    private sys: SystemService
   ) {}

  ngOnInit() {
    this.name = (this.sys.user != null) ? this.sys.user.lastName : 'Not logged in';
  }
}