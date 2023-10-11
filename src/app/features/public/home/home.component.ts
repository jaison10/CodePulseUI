import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../../blog/blogs.service';
import { CategoryService } from '../../category/category-service.service';
import { Blog } from '../../blog/models/blog-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs$?: Observable<Blog []>;

  constructor( private routes : ActivatedRoute, 
    private blogService : BlogsService, 
    private router : Router,
    private categoryService : CategoryService)  { }

  ngOnInit(): void {
    this.blogs$ = this.blogService.GetAllPosts();
  }

}
