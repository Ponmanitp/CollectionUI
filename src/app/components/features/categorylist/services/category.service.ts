import { inject, Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  addCategory(category: AddCategoryRequest): Observable<void> {
    return this.http.post<void>('http://localhost:5254/api/v1/Category', category);
  }
}
