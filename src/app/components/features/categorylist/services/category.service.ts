import { inject, Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  addCategory(category: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}Category`, category);
  }

  getCategoryByName(categoryName: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}Category/${categoryName}`);
  }

  editCategory(category: Category): Observable<void> {
    return this.http.put<void>(`${environment.apiBaseUrl}Category/${category.categoryName}`, category);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}Category`);
  }

  deleteCategory(categoryName: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}Category/${categoryName}`);
  }
}
