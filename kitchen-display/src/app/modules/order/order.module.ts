import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlaceOrderComponent],
  providers:[OrderService]
})
export class OrderModule { }
