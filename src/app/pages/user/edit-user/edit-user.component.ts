import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{

  userForm !: FormGroup
  id : any

  constructor(private router : Router , private formBuild : FormBuilder , private userService : UserService , private activatedRoute : ActivatedRoute){
   
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.id = params['id_user']
    });
  
  }


  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe({
      next : (user : any)=>{
        
        this.userForm = this.formBuild.group({
          id_user : [user.id_user],
          profil : [user.profil],
          fullname : [user.fullname],
          login : [user.login],
          pwd : [user.pwd]
        })
        
      }
    })
  }

  update_user(){
   this.userService.updateUser(this.userForm.value).subscribe({
    next : (data : any)=> {
      alert('loooool' + data)
      this.router.navigate(['home' , 'user' , 'list-user'])
    },
    
    error : err => console.log(err)
    
   })
  
  }


  btn_vider(){
    this.userForm.reset()
  }
  
  btn_retour(){
    this.router.navigate(['home' , 'user' , 'list-user'])
  }

}
