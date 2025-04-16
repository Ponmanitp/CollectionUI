import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-jewelry',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './jewelry.component.html',
  styleUrl: './jewelry.component.css'
})
export class JewelryComponent {
  title = 'Jewelry Collections';
  description = 'Explore our exquisite collection of jewelry, including necklaces, earrings, bracelets, and rings. Each piece is crafted with precision and care, ensuring you find the perfect accessory for any occasion.';

  router = inject(Router);

  onBack()
  {
    this.router.navigate(['/Collections']);
  }

}
