import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  numero1: number | null =  null;
  numero2: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>();

  calcular(){
    if(this.numero1 && this.numero2){
      let resultado = this.numero1 + this.numero2;
      this.resultadoSuma.emit(resultado);
    }
  }
  
}
