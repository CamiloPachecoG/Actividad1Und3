import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent {

  pEstado = true;
  sEstado = false;

  forma = {
    'elemento1 elemento2':true
  }

  cambiar(){

    this.forma['elemento1 elemento2'] = false;
    
  }

}
