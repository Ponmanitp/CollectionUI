import { inject, Injectable } from '@angular/core';
import { CategoryRequest } from '../models/category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  addCategory(category: CategoryRequest): Observable<Category> {
    return this.http.post<Category>(
      `${environment.apiBaseUrl}Category`,
      category
    );
  }

  getCategoryByName(categoryName: string): Observable<Category> {
    return this.http.get<Category>(
      `${environment.apiBaseUrl}Category/${categoryName}`
    );
  }

  editCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${environment.apiBaseUrl}Category/${category.categoryName}`,
      category
    );
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}Category`);
  }

  deleteCategory(categoryName: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiBaseUrl}Category/${categoryName}`
    );
  }
}
