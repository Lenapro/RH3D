import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  router = inject(Router);

  linkClass(route: string): string {
    const base = 'xl:text-lg font-semibold transition hover:text-gray-500/75';

    return this.router.url === route
      ? `${base} text-[#1F5D42] border-b-2 border-[#1F5D42] pb-2`
      : `${base} text-gray-500`;
  }

  isMenuOpen: boolean = false;

}
