import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from '../shared/prduit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  api_url = "https://asset-manager-back.vercel.app"
  constructor(private httpClient: HttpClient) { }
  getProducts(){
    return this.httpClient.get<produit[]>(`${this.api_url}/produits`)
  }

  addProduct(prod : produit){
    return this.httpClient.post(`${this.api_url}/produits` , prod)
  }
}
