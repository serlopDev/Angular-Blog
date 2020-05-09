import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { PeliculasComponent } from './Components/peliculas/peliculas.component';
import { HeaderComponent } from './Components/header/header.component';
import { JumbotronComponent } from './Components/jumbotron/jumbotron.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { PaginaComponent } from './Components/pagina/pagina.component';
import { ErrorComponent } from './Components/error/error.component';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { HttpClient } from '@angular/common/http';
import { ArticlesComponent } from './Components/articles/articles.component';
import { ArticleComponent } from './Components/article/article.component';
import { SearchComponent } from './Components/search/search.component';
import { ArticleNewComponent } from './Components/article-new/article-new.component';
import { ArticleEditComponent } from './Components/article-edit/article-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    HeaderComponent,
    JumbotronComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PeliculaComponent,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
