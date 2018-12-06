import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
  BaseRequestOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { BooksService } from './books.service';
import { environment } from '../../../environments/environment';
import { Book } from '../books/book';

describe('BooksService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        BooksService,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
        { provide: XHRBackend, useClass: MockBackend },
        MockBackend,
        BaseRequestOptions
      ]
      });

    var service = TestBed.get(BooksService)
  });

  describe('getBestsellers()', () => {

    it('should return an Observable<Array<Book>>',
        inject([BooksService, XHRBackend], (service, mockBackend) => {

        const mockResponse = 
          [
            { title: "LOOK ALIVE TWENTY-FIVE" },
            { title: "LONG ROAD TO MERCY" },
            { title: "THE RECKONING" }
          ]
        ;

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getBestsellers().subscribe((books) => {
          expect(books.length).toBe(3);
          expect(books[0].display_name).toEqual("LOOK ALIVE TWENTY-FIVE");
          expect(books[1].display_name).toEqual("LONG ROAD TO MERCY");
          expect(books[2].display_name).toEqual("THE RECKONING");
        });

    }));
  });
})