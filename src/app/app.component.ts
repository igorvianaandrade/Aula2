import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  propriedade = 'Igor';
  aluno:Aluno= {idade: 36, matricula: 123, nome: 'Igor Viana'};
  
}
interface Aluno {
  matricula?:number,
  nome?:string,
  idade?:number
}

