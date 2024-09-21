import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-user',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './ajouter-user.component.html',
  styleUrl: './ajouter-user.component.css'
})
export class AjouterUserComponent implements OnInit {

  profils = [
    {name : 'admin'},
    {name : 'user'}
  ]
  id_user !: number
  userForm : FormGroup
  constructor(private formBuilder : FormBuilder , private userService : UserService , private router : Router){
    this.userForm = this.formBuilder.group({
      profil : ['' , Validators.required],
      fullname : ['',Validators.required],
      login : ['',Validators.required],
      pwd : ['',Validators.required]
    })
  }
  
  ngOnInit(): void {
      
  }


  addUser(){
    console.log(this.userForm.value);
    
    this.userService.addUser(this.userForm.value).subscribe(()=>{
      alert('Success')
      this.router.navigate(['home' , 'user' , 'list-user'])

    })
  }

  updateUser(){}

  
}
