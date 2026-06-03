import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-project',
  imports: [Header, Footer],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {

}
