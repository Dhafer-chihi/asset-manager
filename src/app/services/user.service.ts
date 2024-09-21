import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../shared/user.interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url= environment.apiURL
  constructor(private httpClient : HttpClient) { }
  getUsers(){
    return this.httpClient.get<user[]>(`${this.api_url}/user`)
  }

  getUser(id_user : any){
    console.log('get user');
    
    return this.httpClient.get<user>(`${this.api_url}/user/${id_user}`)
  }

  addUser(user : user){
    console.log('post user')
    return this.httpClient.post<{message : any}>(`${this.api_url}/user` , user)
  }

  updateUser(user : user):Observable<user>{
    console.log('patch user')
    return this.httpClient.patch<user>(`${this.api_url}/user/${user.id_user}` , user)
  }

  deleteUser(user : user){
    console.log('delete user')
    return this.httpClient.delete<{message : any}>(`${this.api_url}/user/${user.id_user}`)
  }
}
