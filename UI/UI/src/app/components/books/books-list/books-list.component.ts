import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks()
    .subscribe({
      next: (books) =>{
        this.books = books;
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }

}
