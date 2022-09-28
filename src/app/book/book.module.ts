import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule
  ]
})

export class BookModule { }
