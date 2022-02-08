import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'product/:id', component: ProductItemDetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'confirmation', component: ConfirmationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
