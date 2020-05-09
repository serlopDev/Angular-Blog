import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal  from 'sweetalert';
import { Article } from 'src/app/Models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

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
    this.title_page = 'Crear artículo';
    this.is_edit = false;
    this.url = Global.url;
    this.valor_boton = 'Crear artículo';
   }

  ngOnInit(){
  }

  onSubmit(){

    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status){
          this.article = response.article;
          this.status = 'success';

          swal(
            'Artículo creado',
            'El artículo ha sido creado con éxito',
            'success'
          );

          this._router.navigate(['/blog']);
        } else {
          this.status = 'Error';
        }
      },
      error => {
        this.status = 'Error';
      }
    )
  }

  uploadImage(data){
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
  }
}
