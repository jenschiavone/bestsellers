import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { HttpModule } from '@angular/http';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      RouterTestingModule,
      FormsModule,
      HttpModule
      ],
      declarations: [
      BooksComponent
      ],
      providers: [
        BooksService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
