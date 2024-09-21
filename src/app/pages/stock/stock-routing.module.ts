import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';
import { AjouterActicleComponent } from './ajouter-acticle/ajouter-acticle.component';
import { AfficherActicleComponent } from './afficher-acticle/afficher-acticle.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {path : 'list-article' , component : StockComponent},
  {path : 'ajouter-article' , component : AjouterActicleComponent},
  {path : 'afficher-article/:ref' , component : AfficherActicleComponent},
  {path : 'edit-article/:ref' , component : EditArticleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
