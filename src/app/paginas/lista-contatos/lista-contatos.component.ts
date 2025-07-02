import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes

import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';


import agenda from '../../agenda.json';
import { RouterLink } from '@angular/router';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}


@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})

export class ListaContatosComponent {

  alfabeto: string = "abcdefghijklmnopqrstuvwxyz";

  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  removerAcentos(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
  }

  get letrasComContatosFiltrados(): string[] {
    return this.alfabeto
      .split('')
      .filter(letra => this.filtrarContatoPorLetraIncial(letra).length > 0);
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    const textoFiltrado = this.removerAcentos(this.filtroPorTexto.toLocaleLowerCase())

    return this.contatos.filter(contatoUnico => {
      const nomeSemAcento = this.removerAcentos(contatoUnico.nome.toLowerCase());
      return nomeSemAcento.includes(textoFiltrado);

    })
  }

  filtrarContatoPorLetraIncial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      const primeiraLetra = this.removerAcentos(contato.nome[0].toLowerCase());
      return primeiraLetra === letra.toLowerCase();
    });
  }
}
