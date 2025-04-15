import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './components/features/categorylist/categorylist.component';

@NgModule({
  imports: [
    HomeComponent,
    NavbarComponent,
    CategoryListComponent,

  ],
})
export class AppRoutingModule { }

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Category-List', component: CategoryListComponent },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }

];
