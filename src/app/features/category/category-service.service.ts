import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category-model';
import { CreateCategory } from 'src/app/models/create-category-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpURL = 'https://localhost:7165';

  constructor(private httpClient : HttpClient) { }

  CreateCategory(category : CreateCategory):Observable<Category>{
    return this.httpClient.post<Category>(this.httpURL + "/Category", category);
  }
  GetAllCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.httpURL + "/Category");
  }
}
