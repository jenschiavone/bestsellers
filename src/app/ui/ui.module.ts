import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';

import { BooksRoutingModule } from './books/books-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BooksComponent
    ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: [
  BooksComponent,
  HeaderComponent,
  FooterComponent
  ],
  providers: [BooksService]
})
export class UiModule { }
