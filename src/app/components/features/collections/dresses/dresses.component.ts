import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CollectionsRequest } from '../models/collections-request.models';
import { Observable, Subscription } from 'rxjs';
import { CollectionsService } from '../services/collections.service';
import { Category } from '../../categorylist/models/category.model';
import { CategoryService } from '../../categorylist/services/category.service';
import { Collections } from '../models/collections.models';

@Component({
  selector: 'app-dresses',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './dresses.component.html',
  styleUrl: './dresses.component.css',
})
export class DressesComponent {
  title = 'Dresses Collections';
  error: string = '';
  collectionService$?: Observable<Collections[]>;

  router = inject(Router);

  constructor(private collectionService: CollectionsService) {}

  ngOnInit(): void {
    this.collectionService$ = this.collectionService.getAllCollection();
  }

  back() {
    this.router.navigate(['/Home']);
  }
}
