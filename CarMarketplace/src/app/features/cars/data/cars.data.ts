import { Car } from '../models/car.model';

export const INITIAL_CARS: Car[] = [
  {
    id: 1,
    brand: 'BMW',
    name: '3 Series 320d M Sport',
    body: 'Sedan',
    price: 32900,
    year: 2022,
    mileage: 42000,
    fuel: 'Diesel',
    transmission: 'Automat',
    badge: 'TOP VÝBER',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Biele BMW radu 3 zaparkované pri modernej budove'
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    name: 'GLC 220d 4MATIC',
    body: 'SUV',
    price: 27000,
    year: 2021,
    mileage: 56800,
    fuel: 'Diesel',
    transmission: 'Automat',
    badge: 'OVERENÝ PÔVOD',
    image:
      'https://www.bazos.sk/img/1/790/196520790.jpg?t=1792176189',
    imageAlt: 'Elegantný Mercedes-Benz v tmavom prevedení'
  },
  {
    id: 3,
    brand: 'Škoda',
    name: 'Octavia Combi 2.0 TDI',
    body: 'Kombi',
    price: 24900,
    year: 2023,
    mileage: 28500,
    fuel: 'Diesel',
    transmission: 'Automat',
    badge: 'VÝHODNÁ CENA',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CI5JDBeosTHxshXPgE0PxJEw58cKWTZmGTDfZPCxcw&s=10',
    imageAlt: 'Moderné rodinné auto na ceste'
  }
];
