import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private books = new BehaviorSubject<any>(['My First Book Title','My Second Book Title', 'My Third Book Title' ]);
  book = this.books.asObservable();

  constructor() { }

  changeBook(book){
    this.books.next(book);
  }
}
