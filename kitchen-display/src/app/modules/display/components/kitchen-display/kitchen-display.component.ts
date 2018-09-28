import { Component, OnInit } from '@angular/core';
import { KitchenDisplayService } from '../../services/kitchen-display.service';
import * as io from 'socket.io-client';
import * as vars from '../../common/variable';
declare var jsPDF:any
@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen-display.component.html',
  styleUrls: ['./kitchen-display.component.css'],
  providers: [KitchenDisplayService]
})

export class KitchenDisplayComponent implements OnInit {
  orders:any = [];
  private socket;

  constructor(private ks: KitchenDisplayService) {

   }

  ngOnInit() {
    this.displayItems();
    this.socket = io(vars.url);
    this.socket.on('orders', (res) => {
      if (res) this.orders = res.message
    });
  }
  displayItems(): void {
    this.ks.getDisplay()
      .subscribe((res: any) => {
        console.log('the display::', res)
        if (res.status) {
          this.orders = res.message

        }
        else {
          //data not found
        }
      })
  }
  orderMarkCompleted(product_Id, quantity?: number): void {
    if (quantity > 0) {
      this.ks.orderCompleted({ product_Id: product_Id })
        .subscribe((res: any) => {
          this.displayItems()
        })
    }
    else {
     alert('Order Already completed !')
    }
  }

  generateReport():void{
    console.log(this.orders);
    let arr = [];
    let columns = ["Dish name", "Produced", "Predicted"];
    let predicted;
    this.orders.forEach(order => {
      predicted = "prediction" in order.product_Id ? order.product_Id.prediction.prediction[order.product_Id.prediction.__v].value:''
      arr.push([order.product_Id.name,order.created_till_now,predicted])
    });

    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, arr);
    doc.save('table.pdf');
  }
}
