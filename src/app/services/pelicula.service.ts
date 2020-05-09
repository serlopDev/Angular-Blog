import { Injectable } from '@angular/core';
import { Pelicula } from '../Models/Pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula('The Warriors', 1979, '../assets/images/the-warriors-película.jpg'),
            new Pelicula('La Purga: Election Year', 2016, '../assets/images/Election_La_noche_de_las_bestias-520265366-large.jpg'),
            new Pelicula('Star Wars: El Ascenso de Skywalker', 2019, '../assets/images/star-wars-el-ascenso-de-skywalker-poster-1572913527.jpeg')
            ];
    }

    getPeliculas(){
        return this.peliculas;
    }
}