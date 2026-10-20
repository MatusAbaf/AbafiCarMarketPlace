import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    service = TestBed.inject(CarService);
  });

  it('should include the three sample cars', () => {
    expect(service.cars().length).toBe(3);
    expect(service.findById(1)?.name).toBe('3 Series 320d M Sport');
  });

  it('should add a car and assign a unique id', () => {
    const car = service.add({
      brand: 'Toyota',
      name: 'Corolla 1.8 Hybrid',
      body: 'Hatchback',
      price: 22000,
      year: 2024,
      mileage: 12000,
      fuel: 'Hybrid',
      transmission: 'Automat',
      badge: 'NOVINKA',
      image: 'https://example.com/car.jpg',
      imageAlt: 'Biela Toyota Corolla'
    });

    expect(car.id).toBe(4);
    expect(service.findById(car.id)).toEqual(car);
  });

  it('should update a car without changing its id', () => {
    const updatedCar = service.update(1, {
      brand: 'BMW',
      name: '320d M Sport upravené',
      body: 'Sedan',
      price: 31900,
      year: 2022,
      mileage: 42000,
      fuel: 'Diesel',
      transmission: 'Automat',
      badge: 'TOP VÝBER',
      image: 'https://example.com/car.jpg',
      imageAlt: 'Čierne BMW'
    });

    expect(updatedCar?.id).toBe(1);
    expect(service.findById(1)?.name).toBe('320d M Sport upravené');
  });
});
