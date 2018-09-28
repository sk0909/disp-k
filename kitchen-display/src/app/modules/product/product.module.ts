import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductService } from './services/product.service';
import { ProductPredictionComponent } from './components/product-prediction/product-prediction.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,ReactiveFormsModule
  ],
  providers:[ProductService],
  declarations: [CreateProductComponent, ProductPredictionComponent]
})
export class ProductModule { }
