import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {  DataTablesModule } from 'angular-datatables';
import { UserService } from '../../services/user.service';
import { user } from '../../shared/user.interface';
import { Config } from 'datatables.net';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DataTablesModule , RouterModule , CommonModule] ,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  //users : Observable<user[]> | null = null
  users : user[] = []
  dtOptions: Config = {};
  dtTrigger : Subject<any> = new Subject<any>()

  id !: number
  constructor(private router : Router , private userServices : UserService , private activetedRoute : ActivatedRoute){
    this.activetedRoute.params.subscribe(params => {
      this.id = params['id_user']
    })    
  }

  ngOnInit(): void {
    document.querySelector(".table-wrapper")?.classList.add('collapse')

    this.dtOptions = {
      pagingType : 'full_numbers'
    };
    
    this.getAllUsers()
  }
  
  getAllUsers(){
    //********** Subscribe *******//
    this.userServices.getUsers().subscribe({
      next : (data : any)=>{
        this.users = data 
        this.dtTrigger.next(null)
        setTimeout(()=>{
          document.querySelector(".table-dash")?.classList.remove('collapse')
          document.querySelector(".card-product")?.classList.add('collapse')
        },10)
      },
      error :(err:any)=>{
        console.log(err);
      }
    })

    //******** Pipe *********//
    // this.userServices.getUsers().pipe(
    //   map((data)=>{data : data})
    // )


  }

  


  deleteUser(user : user){
    if(!confirm(('Voulez vous supprimer cet utilisateur!')))
      return
    this.userServices.deleteUser(user).subscribe({
      next : next => this.getAllUsers(),
      error : err => console.log(err)
      
    })
  }

  btn_ajouter_user(){
    this.router.navigate(['home' , 'user' , 'ajouter-user'])
  }

  btn_edit_user(id_user : number){
    this.router.navigate(['home' , 'user' , 'edit-user' , id_user])
  }

  btn_afficher_user(id_user : any){
    this.router.navigate(['home' , 'user' , 'afficher-user' , id_user])
  }
}
