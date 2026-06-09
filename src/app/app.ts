import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoaVindas } from './boa-vindas/boa-vindas';
import { Navbar } from './navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoaVindas, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
