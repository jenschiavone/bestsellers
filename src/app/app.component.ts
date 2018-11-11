import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

import { Book } from './books/book';
import { BooksService } from './books/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // query: string;
  // currentBook: Book;
  private booksUrl = environment.booksApiBaseUrl;
  bestsellers: Book[];

  // showBook(book) {
  //   this.query = '';
  //   book.highlight = !book.highlight;
  //   this.currentBook = book;
  // }

  constructor(private http: Http) {
    this.getBooks();
    this.getData();
  }
  

  getData() {
    return this.http.get(this.booksUrl)
      .map((res: Response) => res.json())
  }

  // ngOnInit() {
  //   let timer = Observable.timer(0, 5000);
  //   timer.subscribe(() => this.getBooks)
  // }

  getBooks() {
    this.getData().subscribe(data => {
      console.log(data);
      this.bestsellers = data
    })
  }
}
