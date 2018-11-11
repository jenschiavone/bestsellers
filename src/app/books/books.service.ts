import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import { Book } from './book'

@Injectable()
export class BooksService {

  private booksUrl = 'https://jls-books-api.herokuapp.com/';
  constructor(private http: Http) {}

  getBooks(): Observable<Book[]> {
    return this.http.get(this.booksUrl)
                    .map((response: Response) => <Book[]>response.json())
  }
}