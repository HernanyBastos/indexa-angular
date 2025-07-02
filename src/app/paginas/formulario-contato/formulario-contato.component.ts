import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//Componentes
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


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

  //constructor() { }

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

    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
    }
  }
}
