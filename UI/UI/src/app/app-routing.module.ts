import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'books/add',
    component: AddBookComponent
  },
  {
    path: 'books/edit/:id',
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
