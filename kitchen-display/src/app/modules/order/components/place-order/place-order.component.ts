import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import * as io from 'socket.io-client';
import * as vars from '../../common/variable';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  orderForm:FormGroup;
  products:any;
  private socket;    

  constructor(private orderService:OrderService,private fb_Group:FormBuilder) { }

  ngOnInit() {
    this.orderFormCreate();
    this.getProducts();
    this.socket = io(vars.url);
    this.socket.on('product', (res)=>{
      if(res) this.products.push(res);
    });
  }

  createOrder():void{
    console.log(this.orderForm.value)
    this.orderService.createOrder(this.orderForm.value).subscribe((res: any)=>{
      alert('Order Created');
      if(res.status) { alert('Order Created'); this.orderForm.reset();}
      else  alert('Error!');
    })
  }

  private orderFormCreate():FormGroup
  {
    return (this.orderForm = this.fb_Group.group({
      product_Id: ['', [Validators.required]],
      quantity: ['', Validators.required],
      user:this.fb_Group.group({
        phoneNumber:['', [Validators.required,Validators.minLength(10),Validators.pattern('[0-9]*')]],
        firstName:[''],
        lastName:['']
      })
    }))
  }

  getProducts():void{
   this.orderService.getProducts().subscribe((res: any)=>{
     console.log('the orders::', res)
      if(res.status) this.products = res.message
      else alert('Unable to fetch data');
    })
  }

}
