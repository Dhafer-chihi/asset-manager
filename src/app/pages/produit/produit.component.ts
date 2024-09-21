import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables'
import { ProduitService } from '../../services/produit.service';
import { CommonModule } from '@angular/common';
import { produit } from '../../shared/prduit.interface';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [DataTablesModule , RouterModule , CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
 
 products:produit[]=[]
 id : any
 dtOptions : Config = {}
 dtTrigger : Subject<any> = new Subject<any>()

constructor(private router : Router , private productService : ProduitService , private artivatedRoute : ActivatedRoute){
  this.artivatedRoute.params.subscribe(params=>{
    this.id = params['sn']
  })
}

    ngOnInit(): void {
      document.querySelector(".table-wrapper")?.classList.add('collapse')
      this.dtOptions = {
        pagingType: 'full_numbers',
       };
       
     this.getAllProduct()
    }

    getAllProduct(){
      this.productService.getProducts().subscribe({
        next : (data:any)=>{
          this.products = data
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
    }
    

    deleteProduct(){
      if(!confirm('Voulez vous supprimer ce produit'))
        return
      this.productService.deleteProduct(this.id).subscribe({
        next : next => this.getAllProduct(),
        error : err => console.log(err)
        
      })
    }

    btn_update_prod(sn :  any){
      this.router.navigate(['home' , 'produit' , 'edit-produit' , sn])
    }


    btn_ajouter_prod(){
      this.router.navigate([ 'home' , 'produit' , 'ajouter-produit'])
    }

    btn_afficher_produit(sn : any){
      this.router.navigate(['home' , 'produit' , 'afficher-produit' , sn])
    }
 

}
