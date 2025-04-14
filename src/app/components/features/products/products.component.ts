import { Component, NgModule, OnInit } from '@angular/core';
import { Product, ProductService } from '../product-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent implements OnInit {
  newProduct: Product = { id: 0, name: '', category: '' };
  products: Product[] = [];
  title = 'Product List';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  addProduct() {
    this.newProduct.id = Date.now();
    this.productService.addProduct({ ...this.newProduct });
    this.newProduct = { id: 0, name: '', category: '' };
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
