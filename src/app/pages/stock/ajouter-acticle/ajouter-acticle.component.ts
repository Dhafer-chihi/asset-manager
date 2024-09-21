import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { category } from '../../../shared/category.interface';
import { ArticleService } from '../../../services/article.service';
import { article } from '../../../shared/article.interface';

@Component({
  selector: 'app-ajouter-acticle',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './ajouter-acticle.component.html',
  styleUrl: './ajouter-acticle.component.css'
})
export class AjouterActicleComponent implements OnInit{
  
  cat : category[] = []

  
   articleForm = new FormGroup({
    cat : new FormControl(''),
    name : new FormControl(''),
    ref : new FormControl(''),
    prix : new FormControl(''),
    qte : new FormControl(''),
  })


  constructor(private router : Router ,private articleService : ArticleService ,private categoryService : CategoryService){}
  ngOnInit(): void {
      this.getAllCategory()
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe({
      next : (data : any)=>{
        this.cat = data
      },
      error : err => console.log(err)
      
    })
  }

  addArticle(){
    this.articleService.addArticle(this.articleForm.value).subscribe({
      next : (article : any)=>{
        alert('Success')
        this.router.navigate(['home' , 'stock' , 'list-article'])
        
      },
      error : err => console.log(err)
      
    })
    
  }

  btn_reste(){
    this.articleForm.reset()
  }

  btn_retour(){
    this.router.navigate(['home' , 'stock' , 'list-article'])
  }

}
