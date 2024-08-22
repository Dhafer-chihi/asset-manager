import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [DataTablesModule , RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  constructor(private router : Router){

  }
  ngOnInit(): void {
      
  }

  ajouter_client(){
    this.router.navigate(['home' , 'client' , 'ajouter-client'])
  }
  afficher_client(){
    this.router.navigate(['home' , 'client' , 'afficher-client'])
  }
}
