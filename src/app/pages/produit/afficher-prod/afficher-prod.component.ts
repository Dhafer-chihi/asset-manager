import { Component, OnInit } from '@angular/core';
import { produit } from '../../../shared/prduit.interface';
import { ProduitService } from '../../../services/produit.service';
import { ActivatedRoute } from '@angular/router';
import { client } from '../../../shared/client.interface';

@Component({
  selector: 'app-afficher-prod',
  standalone: true,
  imports: [],
  templateUrl: './afficher-prod.component.html',
  styleUrl: './afficher-prod.component.css'
})
export class AfficherProdComponent implements OnInit{
  produit !: produit
  client !: client
  sn : any
  constructor(private productService : ProduitService , private activatedRoute : ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.sn = params['sn']
    })
    console.log(this.sn);
    
  }
  ngOnInit(): void {
      this.getProduit()
  }

  getProduit(){
    this.productService.getPdroduct(this.sn).subscribe({
      next : (data :any)=>{
        this.produit = data      
      },
      error : err => console.log(err)
      
    })
  }

}
