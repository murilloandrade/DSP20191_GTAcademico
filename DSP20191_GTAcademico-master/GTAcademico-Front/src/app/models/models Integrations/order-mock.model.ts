import { OrderItemMock } from "./order-item-mock.model";

export class OrderMock {
    id: number;
    customer: number;
    date: Date;
    orderItemList: OrderItemMock[];

    constructor() {
        this.id = null;
        this.customer = null;
        this.date = null;
        this.orderItemList = [];
    }
}