import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/interfaces/order.interface';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  isMobile = false;
  showTable = false;
  orders: Order[] = [];
  displayedColumns = ['name', 'resumeUrl', 'specialization', 'rating',
    'orders'];
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    this.orderService.ordersBoard.subscribe(orders => {
      this.orders = orders;
      this.showTable = true;
    });
  }

}
