import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1: number =  2;
  numero2: number = 3;
  resultado: number = 0;

  calcular(){
      this.resultado = this.numero1 + this.numero2;

      return this.resultado;
  }
  
  
}


