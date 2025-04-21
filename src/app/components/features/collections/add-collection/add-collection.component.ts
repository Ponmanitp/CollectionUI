import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CollectionsRequest } from '../models/collections-request.models';
import { Category } from '../../categorylist/models/category.model';
import { Subscription } from 'rxjs';
import { CollectionsService } from '../services/collections.service';
import { CategoryService } from '../../categorylist/services/category.service';

@Component({
  selector: 'app-add-collection',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-collection.component.html',
  styleUrl: './add-collection.component.css'
})
export class AddCollectionComponent {
    title = 'Add Dress';
    error: string = '';
    model: CollectionsRequest;
    category: Category[] = [];

    router = inject(Router);
    private addSubscription?: Subscription;
    constructor(
      private collectionService: CollectionsService,
      private categoryService: CategoryService
    ) {
      this.model = {
        ItemId: '',
        ItemName: '',
        ImageUrl: '',
        Description: '',
        Category: {} as Category,
        Price: 0,
        Quantity: 0,
        PostedDate: new Date(),
      };
      this.loadCategories();
    }

    loadCategories(): void {
      this.categoryService.getAllCategory().subscribe({
        next: (category) => {
          this.category = category;
        },
        error: () => {
          this.error = 'Error loading categories.';
        },
      });
    }

    addDress(): void {
      this.addSubscription = this.collectionService.addCollection(this.model)
      .subscribe({
        next: () => { this.router.navigate(['/Collections/Dresses']); },
        error: () => { this.error = 'Failed to add collection.'; }
      });
    }

    onCancel() {
      this.router.navigate(['/Collections/Dresses']);
    }

}
