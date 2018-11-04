import { Component, OnInit } from '@angular/core';
// import this
import { ActivatedRoute, Router } from '@angular/router'; 
// import UserService
import { LineItemsService } from '../line-item.service';
// import User class
import { LineItems } from '../line-item.class';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent implements OnInit {

  prli: LineItems;

  delete(): void {
    this.prlisvc.remove(this.prli).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/prs/list');
    });
  }

  constructor(
    private route: ActivatedRoute, 
    private prlisvc: LineItemsService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id; 
    this.prlisvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.prli = resp.data;
    });
  }

}