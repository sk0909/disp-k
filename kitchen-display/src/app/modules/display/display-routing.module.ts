import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenDisplayComponent } from './components/kitchen-display/kitchen-display.component';

const routes: Routes = [
{ path: '', redirectTo: 'display', pathMatch: 'full' },
{ path: 'display', component: KitchenDisplayComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
