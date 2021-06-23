import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
