import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/features/products/products.component';
import { CategoryListComponent } from './components/features/categorylist/categorylist.component';

@NgModule({
  imports: [
    HomeComponent,
    NavbarComponent,
    CategoryListComponent,
    ProductsComponent,

  ],
})
export class AppRoutingModule { }

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Category-List', component: CategoryListComponent },
  { path: 'Products', component: ProductsComponent },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }

];
