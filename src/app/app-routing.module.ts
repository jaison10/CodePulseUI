import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { BlogListComponent } from './features/blog/blog-list/blog-list.component';
import { AddEditBlogComponent } from './features/blog/add-edit-blog/add-edit-blog.component';

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
  },
  {
    path:'admin/categories/:Id',
    component : AddCategoryComponent
  },
  {
    path:'admin/blogs',
    component : BlogListComponent
  },
  {
    path:'admin/blogs/:Id',
    component : AddEditBlogComponent
  },
  {
    path:'admin/blogs/add',
    component : AddEditBlogComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
