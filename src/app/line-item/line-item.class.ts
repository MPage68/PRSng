import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItem{
id: number;
    productId: number;
    product: Product;
    requestId: number;
    request: PurchaseRequest;
    quantity: number;
    active: boolean;

    constructor() {
        this.id = 0;
        this.active = true;
        this.quantity = 1;
    }
}