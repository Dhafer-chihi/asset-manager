import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { category } from '../shared/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api_url = environment.apiURL
  constructor(private httpClient : HttpClient) {}
  getAllCategory(){
    return this.httpClient.get<category[]>(`${this.api_url}/category`)
  }
  getcategory(){}
  addCategory(){}
  updateCategory(){}
  deleteCategory(){}
}
