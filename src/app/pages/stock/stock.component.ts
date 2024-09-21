import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ArticleService } from '../../services/article.service';
import { article } from '../../shared/article.interface';
import { CommonModule } from '@angular/common';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [DataTablesModule , RouterModule , CommonModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent implements OnInit{
  dtOption : Config = {}
  dtTrigger : Subject<any> = new Subject<any>
  articles : article[] = []
  id : any
  constructor(private router : Router , private articleService : ArticleService , private activatedRoute : ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['ref']
    })
  }
  ngOnInit(): void {
    document.querySelector(".table-wrapper")?.classList.add('collapse')
    this.dtOption = {
      pagingType : 'full_numbers'
    }
      this.getArticles()
  }

  getArticles(){
    
    this.articleService.getArticles().subscribe({
      next : (data :any)=>{
        this.articles = data
        this.dtTrigger.next(null)
        setTimeout(() => {
          document.querySelector(".table-dash")?.classList.remove('collapse')
          document.querySelector(".card-product")?.classList.add('collapse')
        }, 10);
      },
      error : err => console.log(err)
      
    })
  }

  deleteArticle(){
    if (!confirm('Voulez vous supprimer cet article'))
      return
    this.articleService.deleteArticle(this.id).subscribe({
      next : next =>{
        this.getArticles()
      },
      error : err => console.log(err)
      
    })
  }


  

  ajouter_article(){
    this.router.navigate(['home' , 'stock' , 'ajouter-article'])
  }

  btn_update_article(ref : any){
    this.router.navigate(['home' , 'stock' , 'edit-article' , ref])
  }

  btn_afficher_article(ref : any){
    this.router.navigate(['home' , 'stock' , 'afficher-article' , ref])
  }
}
