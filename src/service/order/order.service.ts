import { Order } from "entity/order";

export class OrderService {
  static getTotal(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
}
