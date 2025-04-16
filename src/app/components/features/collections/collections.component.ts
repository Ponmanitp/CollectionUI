import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-collections',
  imports: [CommonModule, RouterModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent  {

  // title = 'Collections';
  // description = 'Explore the collections of items available in the app.';
  // router = inject(Router);

  // onBack() {
  //   this.router.navigate(['/home']);
  // }

}
