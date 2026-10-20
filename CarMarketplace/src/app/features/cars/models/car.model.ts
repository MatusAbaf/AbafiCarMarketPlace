export interface Car {
  id: number;
  brand: string;
  name: string;
  body: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  badge: string;
  image: string;
  imageAlt: string;
}

export type CarFormValue = Omit<Car, 'id'>;
