import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'kitchen', pathMatch: 'full' },
  { path: 'kitchen', loadChildren: './modules/display/display.module#DisplayModule' },
  { path: 'product', loadChildren: './modules/product/product.module#ProductModule' },
  { path: 'order', loadChildren: './modules/order/order.module#OrderModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
