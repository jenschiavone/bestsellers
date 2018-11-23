import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { environment } from '../../../environments/environment';

import { Book } from './book'
import { BookListItem } from './book-list-item';

@Injectable()
export class BooksService {


  private booksUrl = environment.booksApiBaseUrl;
  constructor(private http: Http) {
    this.getBestsellers
  }

  getBestsellers(genre:string): Observable<Book[]> {
    return this.http.get(this.booksUrl + `${genre}`)
                    .map((response: Response) => <Book[]>response.json())
  }

  getBookListItems(): Observable<BookListItem[]> {
    return this.http.get('../../../assets/book-list-items.json')
                    .map((response: Response) => <BookListItem[]>response.json())
  }
}
