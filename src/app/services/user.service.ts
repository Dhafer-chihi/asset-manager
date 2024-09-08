import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url="https://asset-manager-back.vercel.app"
  constructor(private httpClient : HttpClient) { }
  getUsers(){
    return this.httpClient.get<user[]>(`${this.api_url}/user`)
  }
}
