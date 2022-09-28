import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';
import { BlogFormComponent } from './modules/blog/pages/blog-form/blog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommandBarComponent,
    BookFormComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
