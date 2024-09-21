import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../../services/produit.service';
import { CategoryService } from '../../../services/category.service';
import { ClientService } from '../../../services/client.service';
import { client } from '../../../shared/client.interface';
import { category } from '../../../shared/category.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-produit',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.css'
})
export class EditProduitComponent implements OnInit{
productForm !: FormGroup
clients : client[] = []
cat : category[] = []
id : any

constructor(private router : Router , private productService : ProduitService ,private activatedRoute : ActivatedRoute,
   private categoryService : CategoryService , private clientService : ClientService , private fb:FormBuilder){
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['sn']
    })
   }

ngOnInit(): void {
  this.getProduct()
  this.getAllClients()
  this.getAllCategory()
    
}

getAllClients(){
  this.clientService.getClients().subscribe({
    next : (data :any)=> this.clients = data,
    error : err => console.log(err)
    
  })
}
getAllCategory(){
  this.categoryService.getAllCategory().subscribe({
    next : (data :any)=> this.cat = data,
    error : err => console.log(err)
    
  })
}
getProduct(){
  this.productService.getPdroduct(this.id).subscribe({
    next : (product :any)=>{
      this.productForm = this.fb.group({
        clientId : [product.clientId],
        sn : [product.sn],
        name : [product.name],
        cat : [product.cat],
        niveau :[product.niveau],
        accessoire : [product.acces],
        panne : [product.panne],
        diag : [product.data],
        note : [product.note],
        pwd : [product.pwd]
      })
    },
    error : err => console.log(err)
    
  })
}


updateProduct() {
  this.productService.updateProduct(this.productForm.value).subscribe({
    next : (data : any)=>{
      alert ('Product updated')
      this.router.navigate(['home' , 'produit' , 'list-produit'])
    },
    error : err => console.log(err)
    
  })
}



btn_reset() {
this.productForm.reset()
}

btn_retour() {
  this.router.navigate(['home' , 'produit' , 'list-produit'])
}

}
