import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { client } from '../../../shared/client.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-afficher-client',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './afficher-client.component.html',
  styleUrl: './afficher-client.component.css'
})
export class AfficherClientComponent implements OnInit{

  client !: client
  id : any

  constructor(private router : Router , private clientService : ClientService , private activatedRoute : ActivatedRoute){
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.id = params['id_client']
      
    })
    
  }
  
  ngOnInit(): void {
    this.afficher_user()
      
  }

  afficher_user(){
    this.clientService.getClient(this.id).subscribe({
      next : (data :any)=> this.client = data,
      error : err => console.log(err)
    })
  }

  btn_retour(){
    this.router.navigate(['home' , 'client' , 'list-client'])
  }
}
