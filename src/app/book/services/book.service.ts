import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  booksArray:Book[] = [

    {
      id: 1001,
      name: "Book1",
      author: ["Author A", "Author B", "Author C"],
      isbn: "111111111"
    },

    {
      id: 1002,
      name: "Book2",
      author: ["Author D", "Author E", "Author F"],
      isbn: "222222222"
    },

    {
      id: 1003,
      name: "Book3",
      author: ["Author G", "Author H", "Author I"],
      isbn: "333333333"
    }

  ];

  constructor() { }

  displayBook() {
    return this.booksArray;
  }

}
