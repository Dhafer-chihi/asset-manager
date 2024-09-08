import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { now } from 'jquery';


@Component({
  selector: 'app-ajouter-prod',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-prod.component.html',
  styleUrl: './ajouter-prod.component.css'
})
export class AjouterProdComponent {
  categorie : string[] = ['iMac' , 'Mac']
  productForm : FormGroup
constructor(private fb:FormBuilder){
  this.productForm = this.fb.group({

    cat:['a' , Validators.required],
    name : ['a' , Validators.required],
    etat : ['a'],
    acces : ['a'],
    sn:['a' , Validators.required],
    panne :['a'],
    pwd:['a'],
    diag : ['a'],
    d_ajout:['a'],
    note:['a'],
    niveau: ['']
  })
}


addProduct() {
throw new Error('Method not implemented.');
}


}
