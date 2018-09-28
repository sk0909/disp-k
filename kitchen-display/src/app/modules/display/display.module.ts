import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { KitchenDisplayComponent } from './components/kitchen-display/kitchen-display.component';

@NgModule({
  imports: [
    CommonModule,
    DisplayRoutingModule
  ],
  declarations: [KitchenDisplayComponent]
})
export class DisplayModule { }
