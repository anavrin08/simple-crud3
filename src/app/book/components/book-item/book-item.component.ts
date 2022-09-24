import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() booksArray:Book | undefined;
  @Output() BookIDEditEmitter = new EventEmitter();
  @Output() BookIDDeleteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendBookIDandEdit(){
    this.BookIDEditEmitter.emit(this.booksArray?.id);
  }

  sendBookIDandDelete(){
    this.BookIDDeleteEmitter.emit(this.booksArray?.id);
  }

}
