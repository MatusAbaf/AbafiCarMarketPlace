import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarService } from './services/car.service';

registerLocaleData(localeSk);

@Component({
  selector: 'app-car-home',
  imports: [FormsModule, DecimalPipe, RouterLink],
  templateUrl: './car-home.component.html',
  styleUrl: './car-home.component.css'
})
export class CarHomeComponent {
  private readonly carService = inject(CarService);
  protected readonly brands = computed(() =>
    [...new Set(this.carService.cars().map((car) => car.brand))].sort()
  );
  protected readonly bodyTypes = computed(() =>
    [...new Set(this.carService.cars().map((car) => car.body))].sort()
  );
  protected readonly selectedBrand = signal('');
  protected readonly selectedBody = signal('');
  protected readonly selectedBudget = signal(0);

  protected readonly filteredCars = computed(() =>
    this.carService.cars().filter(
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
