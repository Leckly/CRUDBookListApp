import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookDetails: Book = {
    id: '',
    name: '',
    author: '',
    numberOfPages:0,
    price:0,
    productionYear:0,
  };

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe({
    next:(params) =>{
      const id = params.get('id');
       if (id ){
        this.bookService.getBook(id).subscribe({
          next: (response) =>{
            this.bookDetails = response;
          }
        })
       }
    }
   })
  }
  updateBook(){
    this.bookService.updateBook(this.bookDetails.id, this.bookDetails).subscribe({
      next: (response) =>{
        this.router.navigate(['books']);
      }
    });
  }
  deleteBook(id: string){
    this.bookService.deletebook(id).subscribe({
      next: (response)=>{
        this.router.navigate(['books']);
      }
    })
  }

}
