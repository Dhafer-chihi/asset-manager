import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { article } from '../shared/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  api_url = environment.apiURL

  constructor(private httpClient : HttpClient) { }

  getArticles()  {
    console.log('Get all articles');
    return this.httpClient.get(`${this.api_url}/article`)
  }
  getArticle(ref :string){
    console.log('Get one article'); 
    return this.httpClient.get(`${this.api_url}/article/${ref}`)
  }
  addArticle(article : any){
    console.log('Post article');
    return this.httpClient.post(`${this.api_url}/article` , article)
  }
  updateArticle(article : any){
    console.log('Update article');
    
    return this.httpClient.patch(`${this.api_url}/article/${article.ref}` , article)
  }
  deleteArticle(ref : string){
    console.log('Delete article');
    
    return this.httpClient.delete(`${this.api_url}/aricle/${ref}`)
  }
}
