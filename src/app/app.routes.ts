import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { News } from './news/news';
import { Project } from './project/project';
import { AboutUs } from './about-us/about-us';
import { NotFound } from './not-found/not-found';
import { Benevole } from './benevole/benevole';
import { Partenaire } from './partenaire/partenaire';
import { Don } from './don/don';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  // { path: 'news', component: News },
  // { path: 'project', component: Project },
  { path: 'about-us', component: AboutUs },
  { path: 'benevole', component: Benevole},
  { path: 'partenaire', component: Partenaire},
  { path: 'don', component: Don },
  { path: '**', component: NotFound }
];
