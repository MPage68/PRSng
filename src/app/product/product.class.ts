import { Vendor } from "../vendor/vendor.class";

export class Product {
    ID: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    constructor(id: number = 0, vendor: Vendor = null, partNumber: string = '',
    name: string = '', price: number = 0, unit: string = '', photPath: string = '') {
        this.ID = 0;
        this.vendor = vendor;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photPath;
    }
}