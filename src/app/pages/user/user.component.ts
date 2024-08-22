import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DataTablesModule , RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private router : Router){}

  ajouter_user(){
    this.router.navigate(['home' , 'user' , 'ajouter-user'])
  }
  afficher_user(){
    this.router.navigate(['home' , 'user' , 'afficher-user'])
  }
}
