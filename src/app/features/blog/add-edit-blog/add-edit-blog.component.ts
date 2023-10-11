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
    'categories' : []
  }
  private existingBlog : boolean = false;
  private createSubscription ?: Subscription;
  private updateSubscription ?: Subscription;
  categories : Category[] = [];

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

      if(IdFromURL != null && IdFromURL != "add"){
        this.blogService.GetBlogById(IdFromURL).subscribe((blog)=>{
          this.blog = blog;
          this.existingBlog = true;
          console.log("Blog Details : ", this.blog);
          console.log("Categories afte blog loaded ", this.blog.categories);
          this.LoadCategories();
        },(error)=>{
          console.log("Error Occured : ", error);
        });
      }else{
        this.LoadCategories();
      }
    });
  }

  LoadCategories(){
    this.categoryService.GetAllCategories().subscribe((categories)=>{
      console.log("Loading Categories......");
      this.categories = categories;
      console.log("Loaded Categories......", this.categories);
    },(error)=>{
      console.log("ERROR! : ", error);
    })
  }

  updateDetails(){
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
      this.blog.categories = this.blog.categories.filter(c=> c !== category);  
      console.log("NEW Blog : ", this.blog);
    } else {
      this.blog.categories.push(category);
      console.log("NEW Blog : ", this.blog);
      
    }
  }

  isSelected(category: Category): boolean {   
    return this.blog.categories.some(obj => JSON.stringify(obj) === JSON.stringify(category));
  }
}
