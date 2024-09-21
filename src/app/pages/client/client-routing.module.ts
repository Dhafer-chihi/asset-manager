import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { AfficherClientComponent } from './afficher-client/afficher-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const routes: Routes = [
  {path: 'list-client' , component:ClientComponent},
  {path :'ajouter-client' , component: AjouterClientComponent},
  {path : 'afficher-client/:id_client' , component : AfficherClientComponent},
  {path : 'edit-client/:id_client' , component : EditClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
