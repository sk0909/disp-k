import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class OrderService {

  constructor(private _htc:HttpClient) { }
 
  createOrder(obj){
    return this._htc.post(environment.baseURL+'inventory/createOrder',obj)
  }
  getProducts(){
    return this._htc.get(environment.baseURL+'inventory/getProduct')
  }
}
