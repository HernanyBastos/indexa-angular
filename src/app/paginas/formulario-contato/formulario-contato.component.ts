import { Component } from '@angular/core';

//Componentes
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    ContainerComponent,
    SeparadorComponent
],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

}
