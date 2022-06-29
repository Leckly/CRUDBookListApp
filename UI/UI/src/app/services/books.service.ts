import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl + '/api/books');
  }

  addBook(addBookR: Book): Observable<Book>{
    addBookR.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Book>(this.baseApiUrl + '/api/books', addBookR);
  }

  getBook(id: string): Observable<Book>{
    return this.http.get<Book>(this.baseApiUrl + '/api/books/' + id);
  }

  updateBook(id: string, updateBook: Book): Observable<Book>{
    return this.http.put<Book>(this.baseApiUrl + '/api/books/' + id, updateBook);
  }

  deletebook(id: string): Observable<Book>{
    return this.http.delete<Book>(this.baseApiUrl + '/api/books/' + id);
  }
}
