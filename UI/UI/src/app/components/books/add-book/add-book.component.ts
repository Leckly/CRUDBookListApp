import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookR: Book = {
    id: '',
    name: '',
    author: '',
    numberOfPages:0,
    price:0,
    productionYear:0,
  };

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook(){
    this.bookService.addBook(this.addBookR).subscribe({
      next: (book) =>{
        this.router.navigate(['books']);
      },
    }
      
    );
  }

}
