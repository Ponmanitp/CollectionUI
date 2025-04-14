import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  id: number;
  name: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  addProduct(product: Product) {
    this.products = [...this.products, product];
    this.productsSubject.next(this.products);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    this.productsSubject.next(this.products);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter((product) => product.category === category);
  }
}
