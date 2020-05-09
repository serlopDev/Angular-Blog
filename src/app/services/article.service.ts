import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../Models/Article';
import { Global } from '../services/global';

@Injectable()

export class ArticleService{

    public url: string;
    public articleId: string;

    constructor(
        private _http: HttpClient,
    ) {
        this.url = Global.url;
    }    

    getArticles(last: any = null): Observable<any>{

        var articles = 'articles';
        
        if(last != null){
            var articles = 'articles/true'
        }
        return this._http.get(this.url + articles);
    };

    getArticle(articleId): Observable<any>{
        return this._http.get(this.url + 'article/' + articleId);
    };

    search(searchString): Observable<any>{
        return this._http.get(this.url + 'search/' + searchString);
    };

    create(article): Observable<any>{

        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save', params, {headers: headers});
    };

    update(id, article): Observable<any>{

        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'article/' + id, params, { headers: headers });
    };

    delete(id): Observable<any>{
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'article/' + id, { headers: headers });
    };
}