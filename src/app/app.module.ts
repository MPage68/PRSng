import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorComponent } from './vendor/vendor/vendor.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { SortUsersPipe } from './pipes/sort-users.pipe';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product/product.component';
import { SortVendors } from './pipes/sort-vendors.pipe.ts.pipe';
import { SortRequests } from './pipes/sort-requests.pipe.ts.pipe';
import { SortProducts } from './pipes/sort-products.pipe.ts.pipe';
import { SortProducts } from './pipes/sort-products.pipe.spec.ts.pipe';
import { SortRequestsPipe } from './pipes/sort-requests.pipe';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { SortVendorsPipe } from './pipes/sort-vendors.pipe';
import { PurchaseRequestComponent } from './purchase-request/purchase-request/purchase-request.component';
import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorComponent,
    BoolDisplayPipe,
    SortUsersPipe,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductComponent,
    SortVendors.Pipe.TsPipe,
    SortRequests.Pipe.TsPipe,
    SortProducts.Pipe.TsPipe,
    SortProducts.Pipe.Spec.TsPipe,
    SortRequestsPipe,
    SortProductsPipe,
    SortVendorsPipe,
    PurchaseRequestComponent,
    PurchaseRequestListComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
