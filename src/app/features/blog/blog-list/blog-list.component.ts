import { Component, OnDestroy, OnInit } from '@angular/core';
import { Blog } from '../models/blog-model';
import { BlogsService } from '../blogs.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {

  blogs : Blog[] = [];
  // blogs = [
  //   { Title: 'Blog Title 1', ShortDesc: 'Short Description 1' },
  //   { Title: 'Blog Title 2', ShortDesc: 'Short Description 2' },
  //   // Add more blog objects as needed
  // ];
  private blogsSubscription ?: Subscription;

  constructor(private BlogService : BlogsService) { }
  ngOnDestroy(): void {
    this.blogsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.blogsSubscription = this.BlogService.GetAllPosts().subscribe((blogs)=>{
      this.blogs = blogs;
      console.log("Blogs : ", this.blogs);
    },(error)=>{
      console.log("Error occured : ", error);
    });
  }

}
