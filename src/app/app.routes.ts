import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/lista-contato',
        pathMatch: 'full'
    },
    {
        path: 'formulario',
        component: FormularioContatoComponent, 
    },
    {   
        path: 'lista-contato',
        component: ListaContatosComponent
    }
];
