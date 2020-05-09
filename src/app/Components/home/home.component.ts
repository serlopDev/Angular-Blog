import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from '../../services/global';
import { Article } from 'src/app/Models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: String;
  public articles: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
    this.title = 'Últimos artículos';
  }

  ngOnInit(){
    this._articleService.getArticles(true).subscribe(
      res =>{
        this.articles = res.articles;
      },
      err => {
        console.log(err);
      }
    )
  }

}
