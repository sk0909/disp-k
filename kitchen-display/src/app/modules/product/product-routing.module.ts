import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductPredictionComponent } from './components/product-prediction/product-prediction.component';

const routes: Routes = [ 
{ path: '', redirectTo: 'create', pathMatch: 'full' },
{ path: 'create', component: CreateProductComponent, pathMatch: 'full' },
{ path: 'prediction', component: ProductPredictionComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
