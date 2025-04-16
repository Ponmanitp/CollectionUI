import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sarees',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './sarees.component.html',
  styleUrl: './sarees.component.css'
})
export class SareesComponent {
  title = 'Sarees Collections';
  description = 'Discover our stunning collection of sarees, perfect for any occasion. Our sarees are designed with elegance and comfort in mind, ensuring you look your best.';

  router = inject(Router);

  onBack() {
    this.router.navigate(['/Collections']);
  }

}
