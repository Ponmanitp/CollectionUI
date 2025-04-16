import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
  providers: [CategoryService]
})
export class AddCategoryComponent {
  title = 'Add Category';
  description = 'Add a new category to the list of categories.';
  error: string = '';
  model: AddCategoryRequest;

  router = inject(Router);
  constructor(private categoryService: CategoryService) {
    this.model = {
      CategoryName: '',
      CategoryUrl: ''
    };
  }

  addCategory() {
    this.categoryService.addCategory(this.model)
      .subscribe({
        next: () => {
          console.log('Category added successfully');
          // this.router.navigate(['/Category-List']);
        },
        error: (error) => {
          console.log('Error deleting product:', error);
          this.error = 'Failed to add category.';
        }
      });
  }

  oncancel() {
    this.router.navigate(['/Category-List']);
  }

}

