import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { Book } from './book';
import { BookListItem } from './book-list-item';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  bestsellers: Book[];
  bookListItems: BookListItem[];
  bookListItem: BookListItem;

  constructor(private booksService: BooksService) {}

  onGenreSelected(genre:string) {
    this.getBestsellers(genre);
  }

  getBestsellers(genre:string) {
    this.booksService.getBestsellers(genre).subscribe(bestsellers => this.bestsellers = bestsellers);
  }

  ngOnInit() {
    this.booksService.getBookListItems().subscribe(bookListItems => this.bookListItems = bookListItems);
  }

}
