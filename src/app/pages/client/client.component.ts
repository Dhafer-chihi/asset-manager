import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ClientService } from '../../services/client.service';
import { client } from '../../shared/client.interface';
import { Config } from 'datatables.net';
import { CommonModule } from '@angular/common';
import { data } from 'jquery';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [DataTablesModule , RouterModule , CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clients : client [] = []
  dtOption : Config = {}
  dtTrigger : Subject<any> = new Subject<any>()
  id !: number  

  constructor(private router : Router , private clientService : ClientService , private activatedRoute : ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id_client']
    })
    
  }
  ngOnInit(): void {
    document.querySelector(".table-dash")?.classList.add('collapse')
      this.dtOption = {
        pagingType : 'full_numbers'
      }

      this.getAllClient()
  }

  getAllClient(){
    this.clientService.getClients().subscribe({
      next :(data : any) =>{
        this.clients = data
        this.dtTrigger.next(null)
        setTimeout(()=>{
          document.querySelector(".table-dash")?.classList.remove('collapse')
          document.querySelector(".card-product")?.classList.add('collapse')
        },10)
        
      },
      error : err => console.log(err)
      
    })
  }

  deleteClient(client : client){
    if(!confirm('Voulez vous supprimer ce client'))
      return
    this.clientService.deleteClient(client).subscribe({
      next : next => this.getAllClient(),
      error : err => console.log(err) 
    })
  }


  btn_edit_client(id_client : number){
    this.router.navigate(['home' , 'client' , 'edit-client' , id_client])
  }

  btn_ajouter_client(){
    this.router.navigate(['home' , 'client' , 'ajouter-client'])
  }
  btn_afficher_client(id_client : number){
    this.router.navigate(['home' , 'client' , 'afficher-client' , id_client])
  }
}
