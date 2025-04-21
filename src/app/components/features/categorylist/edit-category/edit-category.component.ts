import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Category } from '../models/category.model';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-edit-category',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  title = 'Edit Category';
  description = 'Add a new category to the list of categories.';
  error: string = '';
  categoryName: string | null = null;
  category?: Category;

  paramsSubscription?: Subscription;
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryName = params.get('categoryName');
        if (this.categoryName) {
          this.categoryService.getCategoryByName(this.categoryName).subscribe({
            next: (response) => {
              this.category = response;
            },
            error: () => {
              this.error = 'Failed to load category.';
            },
          });
        }
      },
    });
  }

  editCategory(): void {
    if (this.category) {
      this.categoryService.editCategory(this.category).subscribe({
        next: () => {
          this.router.navigate(['/Category-List']);
        },
        error: () => {
          this.error = 'Failed to edit category.';
        },
      });
    }
  }

  deleteCategory(): void {
    if (this.categoryName) {
      this.categoryService.deleteCategory(this.categoryName!).subscribe({
        next: () => {
          this.router.navigate(['/Category-List']);
        },
        error: () => {
          this.error = 'Failed to delete category.';
        },
      });
    }
  }

  oncancel() {
    this.router.navigate(['/Category-List']);
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
