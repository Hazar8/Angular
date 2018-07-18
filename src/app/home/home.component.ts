import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('books', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        
       query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
        ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  booksCount: number = 5;
  btnText: String = "Add New Book";
  bookTitle: string ="Add New Title";
  books=[];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.book.subscribe(res=>this.books=res);
    this._data.changeBook(this.books);
    this.booksCount= this.books.length;
    }

  addBook(){
    this.books.push(this.bookTitle);
    this.bookTitle= '';
    this.booksCount = this.books.length;
    this._data.changeBook(this.books);
  }

  removeBook(i){
    this.books.splice(i,1);
    this.booksCount = this.books.length;
    this._data.changeBook(this.books);
  }

}
