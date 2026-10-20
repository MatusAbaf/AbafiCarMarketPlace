import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarFormValue } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly carService = inject(CarService);
  protected readonly carId = Number(this.route.snapshot.paramMap.get('id'));
  protected readonly editing = this.route.snapshot.paramMap.has('id');
  protected readonly car = this.editing ? this.carService.findById(this.carId) : undefined;
  protected readonly value: CarFormValue = this.car
    ? {
        brand: this.car.brand,
        name: this.car.name,
        body: this.car.body,
        price: this.car.price,
        year: this.car.year,
        mileage: this.car.mileage,
        fuel: this.car.fuel,
        transmission: this.car.transmission,
        badge: this.car.badge,
        image: this.car.image,
        imageAlt: this.car.imageAlt
      }
    : {
        brand: '',
        name: '',
        body: '',
        price: 0,
        year: new Date().getFullYear(),
        mileage: 0,
        fuel: '',
        transmission: '',
        badge: 'NOVINKA',
        image: '',
        imageAlt: ''
      };

  protected save(): void {
    const value: CarFormValue = {
      ...this.value,
      brand: this.value.brand.trim(),
      name: this.value.name.trim(),
      body: this.value.body.trim(),
      fuel: this.value.fuel.trim(),
      transmission: this.value.transmission.trim(),
      badge: this.value.badge.trim(),
      image: this.value.image.trim(),
      imageAlt: this.value.imageAlt.trim()
    };

    const savedCar = this.editing
      ? this.carService.update(this.carId, value)
      : this.carService.add(value);

    if (savedCar) {
      void this.router.navigate(['/cars', savedCar.id]);
    }
  }
}
