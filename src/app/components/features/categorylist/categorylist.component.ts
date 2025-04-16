import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  imports: [CommonModule, RouterModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})


export class CategoryListComponent {
  error: string = '';
  title = 'Category List';
  router = inject(Router);

  onBack() {
    this.router.navigate(['/Home']);
  }

}
