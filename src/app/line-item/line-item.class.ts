import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItem{
Id: number;
    ProductId: number;
    Product: Product;
    RequestId: number;
    Request: Request;
    Quantity: number;
    Active: boolean;

    constructor() {
        this.Id = 0;
        this.Active = true;
        this.Quantity = 1;
    }
}