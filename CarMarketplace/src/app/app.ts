import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeSk);

interface Car {
  id: number;
  brand: string;
  name: string;
  body: string;
  price: number;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  badge: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly brands = ['BMW', 'Mercedes-Benz', 'Škoda', 'Toyota'];
  protected readonly bodyTypes = ['SUV', 'Sedan', 'Hatchback', 'Kombi'];
  protected readonly selectedBrand = signal('');
  protected readonly selectedBody = signal('');
  protected readonly selectedBudget = signal(0);

  protected readonly cars: Car[] = [
    {
      id: 1,
      brand: 'BMW',
      name: '3 Series 320d M Sport',
      body: 'Sedan',
      price: 32900,
      year: 2022,
      mileage: '42 000 km',
      fuel: 'Diesel',
      transmission: 'Automat',
      badge: 'TOP VÝBER',
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Čierne BMW radu 3 zaparkované pri modernej budove'
    },
    {
      id: 2,
      brand: 'Mercedes-Benz',
      name: 'GLC 220d 4MATIC',
      body: 'SUV',
      price: 38900,
      year: 2021,
      mileage: '56 800 km',
      fuel: 'Diesel',
      transmission: 'Automat',
      badge: 'OVERENÝ PÔVOD',
      image:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Elegantný Mercedes-Benz v tmavom prevedení'
    },
    {
      id: 3,
      brand: 'Škoda',
      name: 'Octavia Combi 2.0 TDI',
      body: 'Kombi',
      price: 24900,
      year: 2023,
      mileage: '28 500 km',
      fuel: 'Diesel',
      transmission: 'Automat',
      badge: 'VÝHODNÁ CENA',
      image:
        'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Moderné rodinné auto na ceste'
    }
  ];

  protected readonly filteredCars = computed(() =>
    this.cars.filter(
      (car) =>
        (!this.selectedBrand() || car.brand === this.selectedBrand()) &&
        (!this.selectedBody() || car.body === this.selectedBody()) &&
        (!this.selectedBudget() || car.price <= this.selectedBudget())
    )
  );

  protected clearFilters(): void {
    this.selectedBrand.set('');
    this.selectedBody.set('');
    this.selectedBudget.set(0);
  }
}
