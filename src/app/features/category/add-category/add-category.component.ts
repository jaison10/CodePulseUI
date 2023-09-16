import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateCategory } from 'src/app/models/create-category-model';
import { CategoryService } from '../category-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { Category } from 'src/app/models/category-model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit,OnDestroy {
  category : Category = {
    'id' :'',
    'name' : '',
    'urlHandle' : ''
  }
  private createCategorySub ?: Subscription;
  private existingCategory : boolean = false;

  constructor(
    private CategoryService : CategoryService, 
    private snackbar : MatSnackBar, 
    private router:Router,
    private readonly routes : ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params)=>{
      var Id = params.get("Id"); 
      console.log("ID : ", Id);
      
      if(Id){
          this.CategoryService.CategoryDetails(Id).subscribe((category)=>{
            this.category = category;
            this.existingCategory = true;
          }, (error)=>{
            console.log("Error From API : ", error);
          });
      }
    })
  }
  public AddCategory(){
    console.log("Existing or not" , this.existingCategory);
    if(this.existingCategory == false){
      this.createCategorySub = this.CategoryService.CreateCategory(this.category).subscribe((createdCat)=>{
        console.log("Created Category : ", createdCat);
        this.router.navigateByUrl('/admin/categories');
      }, (error)=>{
        console.log("Error occured: ", error);
      });    
    }
    else{
      this.createCategorySub = this.CategoryService.UpdateCategory( this.category.id, this.category).subscribe((createdCat)=>{
        console.log("Updated Category : ", createdCat);
        this.router.navigateByUrl('/admin/categories');
      }, (error)=>{
        console.log("Error occured: ", error);
      });
    }
  }
  
  ngOnDestroy(): void {
    this.createCategorySub?.unsubscribe();
  }

}
