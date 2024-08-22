import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
import { AfficherUserComponent } from './afficher-user/afficher-user.component';

const routes: Routes = [
  {path : 'list-user' , component : UserComponent},
  {path : 'ajouter-user' , component:AjouterUserComponent},
  {path : 'afficher-user' , component : AfficherUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
