import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { FormularioBasico } from './formulario-basico/formulario-basico';
import { Navbar } from './navbar/navbar';
import { ClientesCadastrar } from './clientes/clientes-cadastrar/clientes-cadastrar';
import { BoaVindas } from './boa-vindas/boa-vindas';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
    { path: "formulario/campo-basico", loadComponent: () => FormularioBasico},
    { path: "navbar/navbar", loadComponent: () => Navbar},
    { path: "clientes/clientes-cadastrar", loadComponent: () => ClientesCadastrar},
    { path: "/", loadComponent: () => BoaVindas}
];