import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../Models/Pelicula';
import { PeliculaService } from '../../services/Pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public favorita: Pelicula;
  public peliculas: Pelicula[];

  
  constructor(private _peliculaService: PeliculaService){
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit(){
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }
}
