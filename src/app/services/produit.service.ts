import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from '../shared/prduit.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  api_url = environment.apiURL
  constructor(private httpClient: HttpClient) { }
  getProducts(){
    return this.httpClient.get<produit[]>(`${this.api_url}/produits`)
  }

  getPdroduct(sn : any){
    console.log('get product');
    return this.httpClient.get(`${this.api_url}/produits/${sn}`)
  }

  addProduct(prod : produit){
    console.log('post product');
    return this.httpClient.post(`${this.api_url}/produits` , prod)
  }
  
  updateProduct(prod : produit){
    console.log('update product');
    return this.httpClient.put(`${this.api_url}/produits/${prod.sn}` , prod)
  }
  deleteProduct(prod :produit){
    console.log('delete product');
    return this.httpClient.delete(`${this.api_url}/products/${prod.sn}`)
    
  }

}
