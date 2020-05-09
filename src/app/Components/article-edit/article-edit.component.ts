import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal  from 'sweetalert';
import { Article } from 'src/app/Models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.scss'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {


  public article: Article;
  public status: string;
  public title_page: string;
  public is_edit : boolean;
  public url: string;
  public valor_boton: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:  Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Restablecer',
      uploadBtn: 'Subir imagen',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen',
      afterUploadMsg_success: 'Imagen subida con éxito',
      afterUploadMsg_error: 'Sube tu imagen'
    }
};

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router, 
  ) {
    this.article = new Article('','','',null,null);
    this.title_page = 'Editar artículo';
    this.is_edit = true;
    this.url = Global.url;
    this.valor_boton = "Guardar";
   }

  ngOnInit(){
    this.getArticles();
  };

  getArticles(){
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
  
  onSubmit(){

    this._articleService.update(this.article._id, this.article).subscribe(
      
      response => {

        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          swal('Artículo editado', 'Los cambios han sido guardados', 'success');
          this._router.navigate(['/blog/articulo/', this.article._id]);
        } else {
          this.status = 'Error';
        }
      },
      error => {
        this.status = 'Error';
      }
    )
  };

  uploadImage(data){
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
  };
}

