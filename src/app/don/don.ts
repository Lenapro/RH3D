import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-don',
  imports: [Header, Footer, FontAwesomeModule],
  templateUrl: './don.html',
  styleUrl: './don.css',
})
export class Don {
  faShieldHalved = faShieldHalved;
}
