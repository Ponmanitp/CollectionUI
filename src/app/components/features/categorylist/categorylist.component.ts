import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  imports: [CommonModule, RouterModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})


export class CategoryListComponent {
  title = 'Category List';

}
