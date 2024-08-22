import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [DataTablesModule , RouterModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {

  constructor(private router : Router){}

  ajouter_article(){
    this.router.navigate(['home' , 'stock' , 'ajouter-article'])
  }

  afficher_article(){
    this.router.navigate(['home' , 'stock' , 'afficher-article'])
  }
}
