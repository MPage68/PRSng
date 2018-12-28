import { PurchaseRequest } from "../purchase-request/purchase-request.class";
import { Product } from "../product/product.class";

export class LineItem {
    id: number;
    purchaseRequest: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor(id: number = 0, purchaseRequest: PurchaseRequest = null,
        product: Product = null, quantity: number = 0) {
        this.id = id;
        this.purchaseRequest = purchaseRequest;
        this.product = product;
        this.quantity = quantity;
    }
}