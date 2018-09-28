import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'placed', pathMatch: 'full' },
  { path: 'placed', component: PlaceOrderComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
