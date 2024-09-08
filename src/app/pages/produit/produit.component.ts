import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables'
import { ProduitService } from '../../services/produit.service';
import { CommonModule } from '@angular/common';
import { produit } from '../../shared/prduit.interface';
import { Config } from 'datatables.net';


@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [DataTablesModule , RouterModule , CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
 
 products:produit[]=[]
 dtOptions : Config = {}

constructor(private router : Router , private productService : ProduitService){}
i : number = 1

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
       };
       
     this.getAllProduct()
    }

    getAllProduct(){
      this.productService.getProducts().subscribe({
        next : (data:any)=>{
          this.products = data
        }
      })
    }
  


    ajouter_prod_link(){
      this.router.navigate([ 'home' , 'produit' , 'ajouter-produit'])
    }

    afficher_produit(){
      this.router.navigate(['home' , 'produit' , 'afficher-produit'])
    }
 

}
