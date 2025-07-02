import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



//Componentes
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';


interface Contato {
  id: number,
  nome: string,
  telefone: string
}



import agenda from './agenda.json';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  

  alfabeto: string = "abcdefghijklmnopqrstuvwxyz";

  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  get letrasComContatosFiltrados(): string[] {
  return this.alfabeto
    .split('')
    .filter(letra => this.filtrarContatoPorLetraIncial(letra).length > 0);
}

  filtrarContatosPorTexto (): Contato[] {
    if(!this.filtroPorTexto){
      return this.contatos;
    }
    return this.contatos.filter(contatoUnico => {
      return contatoUnico.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatoPorLetraIncial(letra: string): Contato[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }
}
