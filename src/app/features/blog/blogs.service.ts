import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './models/blog-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private httpURL = 'https://localhost:7165';

  constructor(private httpClient : HttpClient) { }

  GetAllPosts():Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(this.httpURL + "/Blog");
  }
}
