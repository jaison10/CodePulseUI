import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from '../category-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  allCategoriesSub ?: Subscription;
  allCategories ?: Category[];

  constructor(private categoryService : CategoryService) { }

  ngOnDestroy(): void {
    this.allCategoriesSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.allCategoriesSub = this.categoryService.GetAllCategories().subscribe((categories)=>{
      console.log("The incoming Array : ", categories);
      this.allCategories = categories;
      console.log("After storing in UI Array : ", this.allCategories);
      
    }, (error)=>{
      console.log("Error : ", error);
    })
  }

}
