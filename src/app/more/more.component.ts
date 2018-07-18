import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  books: any;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.book.subscribe(res=>this.books=res);
  }

}
