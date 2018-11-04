import { Component, OnInit } from '@angular/core';
import { LineItemsService } from '../line-item.service';
import { LineItems } from '../line-item.class';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit {

  prlis: LineItems[];

  constructor(private prlisvc: LineItemsService) { }

  ngOnInit() {
    this.prlisvc.list().subscribe(resp => {
      console.log("Line items: ", resp.data);
      this.prlis = resp.data;
    });
  }

}