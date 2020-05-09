import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
      name: '',
      surname: '',
      bio: '',
      genre: ''
    };
   }

  ngOnInit(): void {
  }

  enviarDatos(){
    console.log(this.user);
    alert('Datos enviados con éxito');
  };
}
