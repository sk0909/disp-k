import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import * as io from 'socket.io-client';
import * as vars from '../../common/variable';
@Component({
  selector: 'app-product-prediction',
  templateUrl: './product-prediction.component.html',
  styleUrls: ['./product-prediction.component.css']
})
export class ProductPredictionComponent implements OnInit {
  predictionForm:FormGroup;
  products:any;
  private socket;   
  constructor(private productService:ProductService,private fb_Group:FormBuilder) { }

  ngOnInit() {
    this.predictionFormCreate();
    this.getProducts();
    this.socket = io(vars.url);
    this.socket.on('product', (res)=>{
      if(res) this.products.push(res);
    });
  }
  
  private predictionFormCreate():FormGroup
  {
    return (this.predictionForm = this.fb_Group.group({
      product_Id: ['', [Validators.required]],
      predictionValue: ['', [Validators.required,Validators.pattern('[0-9]*')]],
    }))
  }

  getProducts():void{
   this.productService.getProducts().subscribe((res: any)=>{
      if(res.status) this.products = res.message
      else alert('Unable to fetch data');
    })
  }

  setPredictionValue(product_Id: any, predictionValue: any):void{
    this.productService.setPrediction({product_Id: product_Id, predictionValue: predictionValue}).subscribe((res: any)=>{
      if(res.status) { alert('Prediction saved'); this.predictionForm.reset();}
      else  alert('Error!');
    })
  }

}
