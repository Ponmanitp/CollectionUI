import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './components/features/categorylist/categorylist.component';
import { CollectionsComponent } from './components/features/collections/collections.component';
import { SareesComponent } from './components/features/collections/sarees/sarees.component';
import { SalwarsComponent } from './components/features/collections/salwars/salwars.component';
import { DressesComponent } from './components/features/collections/dresses/dresses.component';
import { JewelryComponent } from './components/features/collections/jewelry/jewelry.component';
import { AddCategoryComponent } from './components/features/categorylist/add-category/add-category.component';
import { CategoryService } from './components/features/categorylist/services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Category-List', component: CategoryListComponent },
  { path: 'Category-List/Add-Category', component: AddCategoryComponent },
  { path: 'Collections', component: CollectionsComponent },
  { path: 'Collections/Sarees', component: SareesComponent },
  { path: 'Collections/Dresses', component: DressesComponent },
  { path: 'Collections/Salwars', component: SalwarsComponent },
  { path: 'Collections/Jewelry', component: JewelryComponent },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), BrowserModule, NgModule,
    HomeComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    CollectionsComponent,
    SareesComponent,
    SalwarsComponent,
    DressesComponent,
    JewelryComponent
  ],
  exports: [RouterModule],
  providers: [CategoryService, provideHttpClient()]
})


export class AppRoutingModule { }
