import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  propriedade = 'Igor';
  aluno:Aluno= {idade: 40, matricula: 123456, nome: 'Igor Andrade'};
  fnEnviar(){
    console.log("clicou no botão!");
    console.log(this.aluno);
  }
}
interface Aluno {
  matricula?:number,
  nome?:string,
  idade?:number
}

