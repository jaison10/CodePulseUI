import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category-model';
import { CreateCategory } from 'src/app/models/create-category-model';
import { Observable } from 'rxjs';
import { UpdateCategory } from 'src/app/models/update-category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpURL = 'https://localhost:7165';

  constructor(private httpClient : HttpClient) { }

  CreateCategory(category : Category):Observable<Category>{
    var createCat : CreateCategory = {
      Name: category.name,
      UrlHandle : category.urlHandle
    }
    return this.httpClient.post<Category>(this.httpURL + "/Category", createCat);
  }
  GetAllCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.httpURL + "/Category");
  }
  CategoryDetails(categoryId :String):Observable<Category>{
    return this.httpClient.get<Category>(this.httpURL + "/Category/" + categoryId);
  }
  UpdateCategory(categoryId :String, updateDetails : Category):Observable<Category>{
    var updateCat : UpdateCategory = {
      Name : updateDetails.name,
      UrlHandle : updateDetails.urlHandle
    }
    return this.httpClient.put<Category>(this.httpURL + "/Category/" + categoryId, updateCat );
  }
}
