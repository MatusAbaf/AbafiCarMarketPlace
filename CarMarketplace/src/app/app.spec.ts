import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should preserve the car marketplace route', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/cars');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Nájdite auto');
    expect(compiled.querySelectorAll('.car-card').length).toBe(3);
  });

  it('should open a car detail from its route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/cars/1');
    fixture.detectChanges();

    const detail = fixture.nativeElement as HTMLElement;
    expect(detail.querySelector('h1')?.textContent).toContain('3 Series 320d M Sport');
    expect(detail.textContent).toMatch(/32[\s\u00a0]?900\s*€/);
  });
});
