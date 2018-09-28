import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductService {

  constructor(private _htc:HttpClient) { }

  addProduct(obj?:any){
    return this._htc.post(environment.baseURL+'inventory/addProduct',obj)
  }
  getProducts(){
    return this._htc.get(environment.baseURL+'inventory/getProduct')
  }
  setPrediction(obj: any){
    return this._htc.post(environment.baseURL+'inventory/todaysPrediction',obj)
  }
}
