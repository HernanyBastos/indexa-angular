import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contatos/contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = []

  constructor() {

    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    this.contatos = contatosLocalStorage || this.contatos;

    //Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));

  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato (contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
