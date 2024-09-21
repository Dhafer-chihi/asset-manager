import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { client } from '../../../shared/client.interface';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-client',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './ajouter-client.component.html',
  styleUrl: './ajouter-client.component.css'
})
export class AjouterClientComponent implements OnInit{
  client !: client
  types = [
    {name : 'Entreprise'},
    {name : 'Particulier'}
  ]
  clientForm : FormGroup
  
  constructor(private formBuilder : FormBuilder , private clientService : ClientService , private router : Router){
    this.clientForm = this.formBuilder.group({
      type : [ '' , Validators.required],
      fullname : ['',Validators.required],
      identifiant : ['' , Validators.required],
      tel : ['' , Validators.required],
      email : ['' ,],
      note : ['']
    })
    
    
  }
  ngOnInit(): void {
      
  }

 

  addClient(){
    this.clientService.addClient(this.clientForm.value).subscribe({
      next : (client : any)=>{
        alert('Client Added with success')
        this.router.navigate(['home' , 'client' , 'list-client'])

      },
      error : err => console.log(err)
      
    })
    
  }

  onReset(){
    this.clientForm.reset()
  }

  btn_retour(){
    this.router.navigate(['home' , 'client' , 'list-client'])
  }

}
