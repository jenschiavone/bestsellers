import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  inputs: ['book']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
