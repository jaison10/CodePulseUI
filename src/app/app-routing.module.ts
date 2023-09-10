import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo: 'admin/categories',
  //   pathMatch : 'full'
  // },
  {
    path:'admin/categories',
    component : CategoryListComponent
  },
  {
    path:'admin/categories/add',
    component : AddCategoryComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
