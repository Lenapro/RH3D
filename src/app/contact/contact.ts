import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faPaperPlane, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  imports: [Header, Footer, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  faEnvelope = faEnvelope;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  faCircleArrowDown = faCircleArrowRight

}
