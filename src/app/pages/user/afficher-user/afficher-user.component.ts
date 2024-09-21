import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { user } from '../../../shared/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-afficher-user',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './afficher-user.component.html',
  styleUrl: './afficher-user.component.css'
})
export class AfficherUserComponent implements OnInit{

  id : any
  user !: user
  constructor(private activatedRoute : ActivatedRoute , private userService : UserService){
   
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.id = params['id_user']
    });
    
    
    
  }
  ngOnInit(): void {
    this.afficher_user()    
  }

  afficher_user(){
    this.userService.getUser(this.id).subscribe({
      next : (data : any)=>{
        this.user = data
      },
      error :err => console.log(err)
      
    })
  }
  

}
