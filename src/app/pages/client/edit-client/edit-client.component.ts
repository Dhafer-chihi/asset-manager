import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
export class EditClientComponent implements OnInit{

  types = [
    {name : 'Entreprise'},
    {name : 'Particulier'}
  ]
  clientForm !: FormGroup
  id : any
  
  constructor(private router : Router ,private formBuild : FormBuilder ,private activatedRoute : ActivatedRoute , private clientService : ClientService){
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.id = params['id_client']
    })
    
  }
  
  ngOnInit(): void {
    this.getClient()
  }

 getClient(){
  this.clientService.getClient(this.id).subscribe({
    next : (client : any)=>{
      this.clientForm = this.formBuild.group({
        id_client : [client.id_client],
        type : [client.type],
        fullname : [client.fullname],
        identifiant : [client.identifiant],
        email : [client.email],
        tel : [client.email],
        note : [client.note]
      })
    },
    error : err => console.log(err)
    
  })
 }

  updateClient(){
    this.clientService.updateClient(this.clientForm.value).subscribe({
      next :(data :any)=>{
        alert('Client edited')
        this.router.navigate(['home' , 'client' , 'list-client'])
      },
      error : err => console.log(err)
      
    })
  }
  btn_reset(){
    this.clientForm.reset()
  }
  btn_retour(){
    this.router.navigate(['home' , 'client' , 'list-client'])
  }
}
