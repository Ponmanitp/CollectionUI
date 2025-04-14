import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  imports: [CommonModule, RouterModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})


export class CategoryListComponent implements OnInit {
  sarees: Product[] = [];
  salwars: Product[] = [];
  jewelry: Product[] = [];
  dresses: Product[] = [];
  title = 'Category List';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.sarees = this.productService.getProductsByCategory('Sarees');
      this.salwars = this.productService.getProductsByCategory('Salwars');
      this.jewelry = this.productService.getProductsByCategory('Jewelry');
      this.dresses = this.productService.getProductsByCategory('Dresses');
    });
  }
}
