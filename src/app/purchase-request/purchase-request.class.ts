import { User } from "../user/user.class";

export class PurchaseRequest {
    id: number; 
    userId: number;   
    user: User;
    description: string;
    justification: string;
    dateNeeded: string;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: string;
    reasonForRejection: string;

    constructor() {
        this.id = 0;
    }
}