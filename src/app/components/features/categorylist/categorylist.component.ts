import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from './services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from './models/category.model';

@Component({
  selector: 'app-categorylist',
  imports: [CommonModule, RouterModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})

export class CategoryListComponent implements OnInit {
  error: string = '';
  title = 'Category List';
  router = inject(Router);
  categoryList$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryList$ = this.categoryService.getAllCategory();
  }

  onBack() {
    this.router.navigate(['/Home']);
  }

}
