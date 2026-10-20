import { Injectable, signal } from '@angular/core';
import { INITIAL_CARS } from '../data/cars.data';
import { Car, CarFormValue } from '../models/car.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  private readonly carList = signal<Car[]>(INITIAL_CARS.map((car) => ({ ...car })));

  readonly cars = this.carList.asReadonly();

  findById(id: number): Car | undefined {
    return this.carList().find((car) => car.id === id);
  }

  add(value: CarFormValue): Car {
    const nextId = this.carList().reduce((largestId, car) => Math.max(largestId, car.id), 0) + 1;
    const car: Car = { ...value, id: nextId };
    this.carList.update((cars) => [...cars, car]);
    return car;
  }

  update(id: number, value: CarFormValue): Car | undefined {
    if (!this.findById(id)) {
      return undefined;
    }

    const updatedCar = { ...value, id };
    this.carList.update((cars) => cars.map((car) => (car.id === id ? updatedCar : car)));
    return updatedCar;
  }
}
