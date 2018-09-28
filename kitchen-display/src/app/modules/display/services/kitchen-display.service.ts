import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class KitchenDisplayService {

  constructor(private _htc:HttpClient) { }

  getDisplay():Observable<any>{
    return this._htc.post(environment.baseURL+'inventory/displayOrder','')
  }
  orderCompleted(product_Id):Observable<any>{
    return this._htc.post(environment.baseURL+'inventory/orderCompleted',product_Id)
  }
}
