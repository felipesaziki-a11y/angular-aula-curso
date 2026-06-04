import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoaVindas } from './boa-vindas/boa-vindas';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoaVindas, CidadeBlumenau],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
