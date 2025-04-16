import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dresses',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './dresses.component.html',
  styleUrl: './dresses.component.css'
})
export class DressesComponent {
  title = 'Dresses Collections';
  description = 'Explore our exclusive collection of dresses that are perfect for any occasion. From casual to formal, we have something for everyone.';

  router = inject(Router);

  onBack()
  {
    this.router.navigate(['/Collections']);
  }
}
