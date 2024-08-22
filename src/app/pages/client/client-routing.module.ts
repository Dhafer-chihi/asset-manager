import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { AfficherClientComponent } from './afficher-client/afficher-client.component';

const routes: Routes = [
  {path: 'list-client' , component:ClientComponent},
  {path :'ajouter-client' , component: AjouterClientComponent},
  {path : 'afficher-client' , component : AfficherClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
