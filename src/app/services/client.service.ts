import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../shared/client.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  api_url=environment.apiURL
  constructor(private httpClient : HttpClient) { }

  getClients(){
    return this.httpClient.get<client[]>(`${this.api_url}/client`)
  }

  getClient(id_client : number){
    console.log('get client');
    return this.httpClient.get<client>(`${this.api_url}/client/${id_client}`)
  }
  addClient(client : client){
    console.log('add client' , client)
    return this.httpClient.post<{message : any}>(`${this.api_url}/client` , client)
  }

  updateClient(client : client){
    console.log('update client');
    return this.httpClient.put(`${this.api_url}/client/${client.id_client}` , client)
    
  }

  deleteClient(client : client){
    console.log('delete client');
    return this.httpClient.delete(`${this.api_url}/client/${client.id_client}`)
  }
}
