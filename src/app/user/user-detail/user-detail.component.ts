import { Component, OnInit } from '@angular/core';
// import this
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
// import UserService
import { UserService } from '../user.service';
// import User class
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
 
  user : User;
  
  delete(): void {
    this.usersvc.remove(this.user).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/users/list');
    });
  }
  
  constructor(
    private route: ActivatedRoute, 
    private usersvc: UserService,
    private router: Router
    ) { }

  ngOnInit() {
   
    let id = this.route.snapshot.params.id; 
    
    this.usersvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.user = resp.data;
    });
  }

}