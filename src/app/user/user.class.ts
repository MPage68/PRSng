export class User {
    id: number;
    userName: string;
    firsName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
    eMail: string;
    reviewer: boolean;
    admin: boolean;

    constructor(){
        this.id = 0;
        this.password = '';
        this.reviewer = false;
        this.admin = false;
    }

}  