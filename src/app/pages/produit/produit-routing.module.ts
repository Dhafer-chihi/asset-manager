import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit.component';
import { AjouterProdComponent } from './ajouter-prod/ajouter-prod.component';
import { AfficherProdComponent } from './afficher-prod/afficher-prod.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  {path : 'list-produit'  , component:ProduitComponent},
  {path : 'ajouter-produit' , component:AjouterProdComponent},
  {path : 'afficher-produit/:sn' , component:AfficherProdComponent},
  {path : 'edit-produit/:sn' , component : EditProduitComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
