export class User {
    
    ID: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    
    constructor() {
        this.ID = 0;   
        this.email = ''; 
        this.isReviewer = false;
        this.isAdmin = false;
    }
}