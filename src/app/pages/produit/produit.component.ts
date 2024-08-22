import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables'



@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [DataTablesModule , RouterModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
 
 
constructor(private router : Router){}
 
    ngOnInit(): void {
     
    }
  


    ajouter_prod_link(){
      this.router.navigate([ 'home' , 'produit' , 'ajouter-produit'])
    }

    afficher_produit(){
      this.router.navigate(['home' , 'produit' , 'afficher-produit'])
    }
 

}
