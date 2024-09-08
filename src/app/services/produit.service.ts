import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from '../shared/prduit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  Api_server = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }
  getProducts(){
    return this.httpClient.get<produit[]>(`${this.Api_server}/produits`)
  }

  addProduct(prod : produit){
    return this.httpClient.post(`${this.Api_server}/produits` , prod)
  }
}
