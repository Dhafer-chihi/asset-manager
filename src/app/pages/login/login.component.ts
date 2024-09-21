import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

   user = new FormGroup ({
    username : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private router : Router){}
  ngOnInit(): void {
      
  }

  onLogin(){
    if (this.user.value.username == 'user' && this.user.value.password=='user'){
      alert('Connexion')
      this.router.navigate(['home'])
    }
    else{
      alert('Failed')
    }
    
  }

}
