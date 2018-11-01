export class Vendor {
     ID: number;
	  code: string;
	  address: string;
	  city: string;
	  state: string;
	  zip: string;
	  phoneNumber: string;
	  email: string;	
	  preApproved: boolean;

    constructor(){
        this.ID = 0;
        this.code = '';
        this.preApproved = false;
        
} } 