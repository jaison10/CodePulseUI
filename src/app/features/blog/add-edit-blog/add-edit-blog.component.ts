import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Blog } from '../models/blog-model';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { error } from 'console';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category-model';
import { CategoryService } from '../../category/category-service.service';

@Component({
  selector: 'app-add-edit-blog',
  templateUrl: './add-edit-blog.component.html',
  styleUrls: ['./add-edit-blog.component.css']
})
export class AddEditBlogComponent implements OnInit, OnDestroy {

  blog : Blog = {
    'id' : '',
    'title' :'',
    'shortDesc' : '',
    'content' : '',
    'featuredImgURL' : '',
    'urlHandle' : '',
    'publishedDate' : new Date(),
    'author' : '',
    'isVisible' : false,
    'Categories' : []
  }
  private existingBlog : boolean = false;
  private createSubscription ?: Subscription;
  private updateSubscription ?: Subscription;
  categories : Category[] = [];
  selectedCats : Category[] = [];

  constructor(private routes : ActivatedRoute, 
    private blogService : BlogsService, 
    private router : Router,
    private categoryService : CategoryService) { }

  ngOnDestroy(): void {
    this.createSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params)=>{
      var IdFromURL = params.get("Id");
      console.log("ID : ", IdFromURL) ;
      
      this.categoryService.GetAllCategories().subscribe((categories)=>{
        this.categories = categories;
      },(error)=>{
        console.log("ERROR! : ", error);
      })

      if(IdFromURL != null && IdFromURL != "add"){
        this.blogService.GetBlogById(IdFromURL).subscribe((blog)=>{
          this.blog = blog;
          this.existingBlog = true;
          console.log("Blog Details : ", this.blog);
          
        },(error)=>{
          console.log("Error Occured : ", error);
        });
      }
    });
  }

  updateDetails(){
    console.log("Updating data : ", this.blog);
    if(this.existingBlog){
      this.updateSubscription = this.blogService.UpdateBlog(this.blog.id, this.blog).subscribe((blog)=>{
        this.blog = blog;
      },(error)=>{
        console.log("Error on updating : ", error);
      });
    }
    else{
      this.createSubscription = this.blogService.CreateBlog(this.blog).subscribe((blog)=>{
        this.blog = blog;
        this.router.navigateByUrl('/admin/blogs');
      },(error)=>{
        console.log("Error on creating : ", error);
      });
    }
  }

  toggleCategorySelection(category: Category): void {
    if (this.isSelected(category)) {
      this.selectedCats = this.selectedCats.filter(c => c !== category);
      console.log("SELECTED CATS: ", this.selectedCats);
      
    } else {
      this.selectedCats.push(category);
    }
  }

  isSelected(category: Category): boolean {
    return this.selectedCats.includes(category);
  }
}
