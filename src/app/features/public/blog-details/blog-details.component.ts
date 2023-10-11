import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { BlogsService } from '../../blog/blogs.service';
import { CategoryService } from '../../category/category-service.service';
import { Blog } from '../../blog/models/blog-model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

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

  constructor(
    private routes : ActivatedRoute, 
    private blogService : BlogsService, 
    private router : Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params)=>{
      var urlHandle = params.get("url");
      if(urlHandle != null){
        this.blogService.GetBlogByUrlHandle(urlHandle).subscribe((blog)=>{
          this.blog = blog;
        },(error)=>{
          console.log("Error while loading : ", error);
        })
      }
    });
  }
}
