import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { FormularioBasico } from './formulario-basico/formulario-basico';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
    { path: "formulario/campo-basico", loadComponent: () => FormularioBasico}
];