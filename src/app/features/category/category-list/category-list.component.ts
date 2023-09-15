import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from '../category-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  // allCategories ?: Category[];
  categories$ ?: Observable<Category[]>;

  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    // this.categoryService.GetAllCategories().subscribe((categories)=>{
    //   console.log("The incoming Array : ", categories);
    //   this.allCategories = categories;
    //   console.log("After storing in UI Array : ", this.allCategories);
      
    // }, (error)=>{
    //   console.log("Error : ", error);
    // })

    //Instead of Subscribing and storing value in an array, can use "Async Pipe" feature which automatically subscribes and unsubscribes.
    this.categories$ = this.categoryService.GetAllCategories();
  }

}
