import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoaVindas } from './boa-vindas/boa-vindas';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { Navbar } from './navbar/navbar';
import { RouterLink } from '@angular/router';
import { FormularioBasico } from './formulario-basico/formulario-basico';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoaVindas, CidadeBlumenau, Navbar, FormularioBasico],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
