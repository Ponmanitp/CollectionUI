import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-salwars',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './salwars.component.html',
  styleUrl: './salwars.component.css'
})
export class SalwarsComponent {
  title = 'Salwars Collections';
  description = 'Discover our stunning collection of salwars, perfect for any occasion. Our salwars are designed with elegance and comfort in mind, ensuring you look your best.';

  router = inject(Router);

  onBack()
  {
    this.router.navigate(['/Collections']);
  }

}
