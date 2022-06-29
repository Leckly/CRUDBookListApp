import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
