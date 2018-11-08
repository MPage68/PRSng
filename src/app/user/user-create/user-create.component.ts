import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  
  user: User = new User();

   
   save(): void {
    this.usersvc.add(this.user).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/users/create');
    });
  }

  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
   
   //   this.sys.checkForLogin();
  }
}
