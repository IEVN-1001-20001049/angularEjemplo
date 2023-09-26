import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  calcu:string='';
  num1:string='';
  num2:string='';
  resultado:number=0;
  
  calcular(): void {
    if (this.calcu === 'sumar') {
      this.resultado = parseInt(this.num1)+parseInt(this.num2);
    } else if (this.calcu === 'restar') {
      this.resultado = parseInt(this.num1)-parseInt(this.num2);
    } else if (this.calcu === 'dividir') {
      this.resultado = parseInt(this.num1)/parseInt(this.num2);
    } else if (this.calcu === 'multiplicar') {
      this.resultado = parseInt(this.num1)*parseInt(this.num2);
    }
  }
}
