import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { ArticleService } from '../../../services/article.service';
import { category } from '../../../shared/category.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { article } from '../../../shared/article.interface';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent implements OnInit{

  id : any
  art !: article
  cat: category [] = []
  articleForm = new FormGroup({
    cat : new FormControl(''),
    name : new FormControl(''),
    ref : new FormControl(''),
    prix : new FormControl(''),
    qte : new FormControl(''),

  })



  constructor(private router : Router , private categoryService : CategoryService , private articleService : ArticleService,
    private ativatedRoute : ActivatedRoute){
      this.ativatedRoute.params.subscribe(params=>{
        this.id = params['ref']
      })
    }


  ngOnInit(): void {
      this.getAllcategory()
      this.getArticle()
  }

  getAllcategory(){
    this.categoryService.getAllCategory().subscribe({
      next : (data :any) => this.cat = data,
      error : err => console.log(err)
    })
  }

  getArticle(){
    this.articleService.getArticle(this.id).subscribe({
      next : (article : any)=>{
        this.articleForm.setValue({
          name : article.name,
          cat : article.cat,
          ref : article.ref,
          prix : article.prix,
          qte : article.qte,

        })
        
      }
    })
  }



  updateArticle() {
    this.articleService.updateArticle(this.articleForm.value).subscribe({
      next : (data :any)=>{
        alert('Article Updated')
        this.router.navigate(['home' , 'stock' , 'list-article'])
      },
      error : err => console.log(err)
      
    })  
    }
  btn_retour() {
    this.router.navigate(['home' , 'stock' , 'list-article'])
    }
  btn_reste() {
    this.articleForm.reset()
    }
}
