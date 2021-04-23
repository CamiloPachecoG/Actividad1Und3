import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  lista = [
    {producto: 'Leche', precio: '100'},
    {producto: 'Carne', precio: '500'},
    {producto: 'Galletas', precio: '250'},
  ]

  mensaje!:string;
  totalCompra!:number;
  cantidad!:number;

  formulario = new FormGroup({
    producto: new FormControl(''),
    cantidad: new FormControl('')
  });

  validaciones(){
    for(let campo in this.formulario.controls){
      let aux = this.formulario.controls[campo].value;
      if (aux.length==0 || this.formulario.value.cantidad == 0){
        this.mensaje = "Debes rellenar los campos";
      }else{
        this.comprar();
        this.formulario.reset;
        this.mensaje = "Campos Validados";
      }
    }
  }

  comprar(){
    for(let prod of this.lista){
      if(this.formulario.value.producto == "Leche" || this.formulario.value.producto == "leche"){
        this.cantidad = this.formulario.value.cantidad;
        this.totalCompra = this.cantidad * (100 + 100*0.19);
      }
      if(this.formulario.value.producto == "Carne" || this.formulario.value.producto == "carne"){
        this.cantidad = this.formulario.value.cantidad;
        this.totalCompra = this.cantidad * (500 + 500*0.19);
      }
      if(this.formulario.value.producto == "Galletas" || this.formulario.value.producto == "galleta"){
        this.cantidad = this.formulario.value.cantidad;
        this.totalCompra = this.cantidad * (250 + 250*0.19);
      }
    }
  }

}
