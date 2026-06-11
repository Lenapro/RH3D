import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faHandsHoldingCircle, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [Header, Footer, FontAwesomeModule, RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  faHandsHoldingCircle = faHandsHoldingCircle;
  faHeart = faHeart;
  faHandshake = faHandshake;

  photos = [
    {
      id: 1,
      src: 'images/DSCN5926.JPG',
      alt: 'Activité RH3D sur le terrain'
    },
    {
      id: 2,
      src: 'images/DSCN5956.JPG',
      alt: 'Projet de développement durable'
    },
    {
      id: 3,
      src: 'images/DSCN6053.JPG',
      alt: 'Action communautaire RH3D'
    },
    {
      id: 4,
      src: 'images/DSCN5976.JPG',
      alt: 'Sensibilisation environnementale'
    },
    {
      id: 5,
      src: 'images/DSCN5975.JPG',
      alt: 'Reboisement'
    },
    {
      id: 6,
      src: 'images/DSCN5968.JPG',
      alt: 'Agriculture durable'
    }
  ];

  route = inject(Router)

  handleDon() {
    this.route.navigate(['/don']);
  }
}
