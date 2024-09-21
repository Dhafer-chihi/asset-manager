import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { produit } from '../../../shared/prduit.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../../services/produit.service';
import { CommonModule } from '@angular/common';
import { client } from '../../../shared/client.interface';
import { ClientService } from '../../../services/client.service';
import { CategoryService } from '../../../services/category.service';
import { category } from '../../../shared/category.interface';


@Component({
  selector: 'app-ajouter-prod',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './ajouter-prod.component.html',
  styleUrl: './ajouter-prod.component.css'
})
export class AjouterProdComponent implements OnInit{
  
  clients : client[] = []
  cat : category [] = []
  productForm : FormGroup
  product !: produit
  
  
constructor(private fb:FormBuilder , private clientService : ClientService ,private router : Router ,
   private productService : ProduitService , private activatedRoute : ActivatedRoute , private categoryService : CategoryService){
  this.productForm = this.fb.group({
    clientId : ['' , Validators.required],
    sn : ['' , Validators.required],
    name : ['',Validators.required],
    cat : [''],
    niveau :['',Validators.required],
    accessoire : [''],
    panne : [''],
    diag : [''],
    note : [''],
    pwd : ['']
  })
}

ngOnInit(): void {
    this.getAllClient()
    this.getAllCategory()
    
    
}

getAllCategory(){
  this.categoryService.getAllCategory().subscribe({
    next : (data : any)=>{
      this.cat = data
    },
    error : err => console.log(err)
    
  })
}



getAllClient(){
  this.clientService.getClients().subscribe({
    next : (data : any) => {
      this.clients = data
      
    }

  })
}


addProduct() {
  this.productService.addProduct(this.productForm.value).subscribe({
    next : (product : any)=>{
      alert ('Sucess')
      //console.log(product.clientId.fullname)
      this.router.navigate(['home' , 'produit' , 'list-produit'])
    },
    error : err => console.log(err)
    
  })
}

btn_reset(){
  this.productForm.reset()
}
btn_retour(){
  this.router.navigate(['home' , 'produit' , 'list-produit'])
}


}
