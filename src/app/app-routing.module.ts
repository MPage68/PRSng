import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchase-request-review/purchase-request-review.component';

import { LineItemDetailComponent } from './line-item/line-item-detail/line-item-detail.component';
import { LineItemCreateComponent } from './line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './line-item/line-item-edit/line-item-edit.component';
import { LineItemListComponent } from './line-item/line-item-list/line-item-list.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { injectComponentFactoryResolver } from '@angular/core/src/render3';

const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},

  {path: 'users/list', component: UserListComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/login', component: UserLoginComponent },

  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},

  {path: 'products/list', component: ProductListComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},

  {path: 'purchase-request/list', component: PurchaseRequestListComponent},
  {path: 'purchase-request/detail/:id', component: PurchaseRequestDetailComponent},
  {path: 'purchase-request/create', component: PurchaseRequestCreateComponent},
  {path: 'purchase-request/edit/:id', component: PurchaseRequestEditComponent},  
  {path: 'purchase-request/review', component: PurchaseRequestReviewComponent},
  
  
  {path: 'line-item/detail/:id', component: LineItemDetailComponent},
  {path: 'line-item/create/:id', component: LineItemCreateComponent},
  {path: 'line-item/edit/:id', component: LineItemEditComponent},
  {path: 'line-item/list/:id', component: LineItemListComponent},
  
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }