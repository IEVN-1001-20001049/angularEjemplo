import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  num1=0;
  num2=0;
  res=0;
  sumar(){
    this.res=this.num1+this.num2;
  }
}
