import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from '../../services/global';
import { Article } from '../../Models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService,
    
  ) { 
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        }, 

        error => {
          this._router.navigate(['/home']);
        }
      )
    })
  };

  delete(id){

    swal({
      title: "¿Estás seguro?",
      text: "Vas a eliminar un artículo de forma definitiva, ¿deseas continuar?",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response =>{
            swal("El artículo ha sido eliminado", {
              icon: "success",
            });
            this._router.navigate(['/blog']);
          },
          error => {
            this._router.navigate(['/blog']);
          }
        );
      } else {
        swal("El artículo no ha sido eliminado");
      }
    });
  }
}
