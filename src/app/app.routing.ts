import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { PeliculasComponent } from './Components/peliculas/peliculas.component';
import { PaginaComponent } from './Components/pagina/pagina.component';
import { ErrorComponent } from './Components/error/error.component';
import { ArticleComponent } from './Components/article/article.component';
import { SearchComponent } from './Components/search/search.component';
import { ArticleNewComponent } from './Components/article-new/article-new.component';
import { ArticleEditComponent } from './Components/article-edit/article-edit.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'crear-articulo', component: ArticleNewComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:name/:surname', component: PaginaComponent},

    {path: '**', component: ErrorComponent}
]

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);