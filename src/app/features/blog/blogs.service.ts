import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './models/blog-model';
import { Observable } from 'rxjs';
import { UpdateBlog } from './models/update-blog.model';
import { CreateBlog } from './models/create-blog-model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private httpURL = 'https://localhost:7165';

  constructor(private httpClient : HttpClient) { }

  GetAllPosts():Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(this.httpURL + "/Blog/?page=1");
  }
  GetBlogById(blogId : String):Observable<Blog>{
    return this.httpClient.get<Blog>(this.httpURL + "/Blog/" + blogId);
  }
  UpdateBlog(blogId:String,  blog : Blog):Observable<Blog>{
    var updateData : UpdateBlog = {
      title :blog.title,
      shortDesc : blog.shortDesc,
      content : blog.content,
      featuredImgURL : blog.featuredImgURL,
      urlHandle : blog.urlHandle,
      author :blog.author,
      isVisible : blog.isVisible
    }
    return this.httpClient.put<Blog>(this.httpURL + "/Blog/" + blogId, updateData);
  }
  CreateBlog(blog: Blog):Observable<Blog>{
    var createData : CreateBlog = {
      title :blog.title,
      shortDesc : blog.shortDesc,
      publishedDate : blog.publishedDate,
      content : blog.content,
      featuredImgURL : blog.featuredImgURL,
      urlHandle : blog.urlHandle,
      author :blog.author,
      isVisible : blog.isVisible
    }
    return this.httpClient.post<Blog>(this.httpURL + "/Blog", createData);
  }
  DeleteCategory(blogId : String):Observable<Blog>{
    return this.httpClient.delete<Blog>(this.httpURL + "/Blog/" + blogId);
  }
}
