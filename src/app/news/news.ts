import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-news',
  imports: [Header, Footer],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {

}
