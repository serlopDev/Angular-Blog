import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/Models/Pelicula';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss',
              '../../../assets/scss/style.scss']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  public seleccionado: Boolean;


  constructor() { }

  ngOnInit(){
  }
  cambiarClase(){
    if(!this.seleccionado){
      this.seleccionado = true;
    } else {
      this.seleccionado= false;
    }
  };
  
  seleccionar(event, pelicula){
    this.cambiarClase();
    this.MarcarFavorita.emit({
      pelicula: pelicula
    })
  }
}
