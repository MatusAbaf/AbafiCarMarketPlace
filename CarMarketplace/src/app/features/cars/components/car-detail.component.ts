import { DecimalPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-detail',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly carService = inject(CarService);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  protected readonly car = computed(() => {
    const id = Number(this.params().get('id'));
    return Number.isInteger(id) ? this.carService.findById(id) : undefined;
  });
}
