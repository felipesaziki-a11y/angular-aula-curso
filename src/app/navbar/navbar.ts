import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CidadeBlumenau } from '../cidade-blumenau/cidade-blumenau';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CidadeBlumenau],  
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
