import { Component, OnInit } from '@angular/core';
import { CreateCategory } from 'src/app/models/create-category-model';
import { CategoryService } from '../category-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category : CreateCategory = {
    'Name' : '',
    'UrlHandle' : ''
  }
  
  constructor(
    private CategoryService : CategoryService, 
    private snackbar : MatSnackBar, 
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  public AddCategory(){
    console.log(this.category);
    this.CategoryService.CreateCategory(this.category).subscribe((createdCat)=>{
      console.log("Created Category : ", createdCat);
      this.router.navigateByUrl('');
    }, (error)=>{
      console.log("Error occured: ", error);
    });
  }

}
