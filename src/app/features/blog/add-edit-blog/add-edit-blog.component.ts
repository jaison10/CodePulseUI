import { Component, OnDestroy, OnInit } from '@angular/core';
import { Blog } from '../models/blog-model';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { error } from 'console';
import { Subscription } from 'rxjs';

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
    'isVisible' : false
  }
  private existingBlog : boolean = false;
  private createSubscription ?: Subscription;
  private updateSubscription ?: Subscription;

  constructor(private routes : ActivatedRoute, private blogService : BlogsService, private router : Router) { }

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
}
