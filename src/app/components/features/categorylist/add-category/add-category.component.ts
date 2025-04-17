import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnDestroy {
  title = 'Add Category';
  description = 'Add a new category to the list of categories.';
  error: string = '';
  model: AddCategoryRequest;

  router = inject(Router);
  private addCategorySubscription?: Subscription;
  constructor(private categoryService: CategoryService) {
    this.model = {
      CategoryName: '',
      CategoryUrl: ''
    };
  }

  addCategory() {
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
      .subscribe({
        next: () => { this.router.navigate(['/Category-List']); },
        error: () => { this.error = 'Failed to add category.'; }
      });
  }

  oncancel() {
    this.router.navigate(['/Category-List']);
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}

