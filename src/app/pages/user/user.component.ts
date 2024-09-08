import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {  DataTablesModule } from 'angular-datatables';
import { UserService } from '../../services/user.service';
import { user } from '../../shared/user.interface';
import { Config } from 'datatables.net';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DataTablesModule , RouterModule , CommonModule] ,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  users : user[] = []

  dtOptions: Config = {};
  constructor(private router : Router , private userServices : UserService){}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType : 'full_numbers'
    };
    
    this.getAllUsers()

  }
  loadOne(){
    window.location.reload()
  }

  getAllUsers(){

    this.userServices.getUsers().subscribe({
      next : (data : any)=>{
        this.users = data
      },
      error :(err:any)=>{
        console.log(err);
      }
    })
  }

  ajouter_user(){
    this.router.navigate(['home' , 'user' , 'ajouter-user'])
  }
  afficher_user(){
    this.router.navigate(['home' , 'user' , 'afficher-user'])
  }
}
