import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//Componentes
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';


@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ContainerComponent,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})

export class FormularioContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private contatosService: ContatoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    })
  }


  onSubmit() {
    const novoContato = this.contatoForm.value;
    this.contatosService.salvarContato(novoContato);
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contato')
  }

  cancelar() {
    this.contatoForm.reset();
  }
}
