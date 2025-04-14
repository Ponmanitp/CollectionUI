import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  backgroundImage: string;

  constructor() {
    this.backgroundImage = '/assets/images/default.jpeg';
   }

  ngOnInit(): void {
  }

}
