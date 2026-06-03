import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSeedling, faPeopleLine, faHandshake, faLocationDot, faEarth, faUsers, faLeaf, faCannabis, faHeart, faHandsHoldingCircle, faRecycle} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  imports: [Header, Footer, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  faCoffee = faCoffee;
  faSeedling = faSeedling;
  faPeopleLine = faPeopleLine;
  faHandshake = faHandshake;
  faLocationDot = faLocationDot;
  faEarth = faEarth;
  faUsers = faUsers;
  faLeaf = faLeaf;
  faCannabis = faCannabis;
  faHeart = faHeart;
  faHandsHoldingCircle = faHandsHoldingCircle;
  faRecycle = faRecycle

  route = inject(Router)

  handleDon() {
    this.route.navigate(['/don']);
  }

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
}
