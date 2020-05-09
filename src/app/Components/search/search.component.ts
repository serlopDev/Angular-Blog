import { Component, OnInit } from '@angular/core';
import { Article } from '../../Models/Article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ArticleService],
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string;

  constructor(
    private _router:  Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService,
  ) { }

  ngOnInit(){

    this._route.params.subscribe(params => {
      
      var search = params['search'];
      this.search = search;

      this._articleService.search(search).subscribe(

        response => {

          if(response.articles){
            this.articles = response.articles;
          } else {
            this.articles = [];
          }
        },

        error => {
          this.articles = [];
        }
      );
    })};
}
