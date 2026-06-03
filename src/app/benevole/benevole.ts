import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { CountriesService } from '../Services/countries-service';

@Component({
  selector: 'app-benevole',
  imports: [Header, Footer, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './benevole.html',
  styleUrl: './benevole.css',
})
export class Benevole implements OnInit {
  faUsers = faUsers;
  countries: any[] = [];
  cities: string[] = [];
  country = new FormControl('');
  city = new FormControl('');
  
  selectedCity = new FormControl('');
  filteredCountries: any[] = [];
  filteredCities: any[] = [];

  service = inject(CountriesService);

  ngOnInit() {
    this.service.getCountries().subscribe((res) => {
      this.countries = res.data;
      // this.filteredCountries = this.countries; // Initialement, tous les pays sont affichés
    });
    this.country.valueChanges.subscribe(value => {
      const search = value?.toLowerCase() || '';
      this.filteredCountries = this.countries.filter(c => c.country.toLowerCase().includes(search));

      const selectedCountry = this.countries.find(c => c.country.toLowerCase() === search);

      this.filteredCities = selectedCountry ? selectedCountry.cities : [];
      this.city.setValue(''); // Réinitialiser la sélection de la ville lorsque le pays change

    });
    this.city.valueChanges.subscribe(value => {
      const search = value?.toLowerCase() || '';
      const country = this.countries.find(c => c.country.toLowerCase() === this.country.value?.toLowerCase());

      this.filteredCities = country ? country.cities.filter((city: any) => city.toLowerCase().includes(search)) : [];
    });
  }

  selectCountry(country: any) {
    this.country.setValue(country.country);
    this.filteredCountries = [];
    this.filteredCities = country.cities;
  }

  selectCity(city: string) {
    this.city.setValue(city);
    this.filteredCities = [];
  }
}
