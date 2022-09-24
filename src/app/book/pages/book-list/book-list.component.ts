import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  booksArray?:Book[] = [];
  
  constructor(private bookService:BookService) { 
    this.booksArray = this.bookService.displayBook();
  }

  ngOnInit(): void {
  }

  editBook(id:number){
    console.log("edit: "+ id);
  }

  deleteBook(id:number){
    console.log("delete: "+ id);
  }


}
