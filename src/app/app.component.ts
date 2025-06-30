import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


//Componentes
import { ContainerComponent } from './componentes/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indexa';
}
