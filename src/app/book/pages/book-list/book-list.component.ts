import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private bookService:BookService, private router:Router) { }

  ngOnInit(): void {
    this.booksArray = this.bookService.displayBook();
  }

  editBook(id:number){
    alert(`Edit: ${id}`);
    this.router.navigate(['book/form'])
  }

  deleteBook(id:number){
    alert(`Delete: ${id}`);
  }



}
