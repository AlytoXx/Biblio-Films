import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  id!: number;
  title!: string;
  image!: any;
  recommendation!: number;
  overview!: string;
  date!: Date;
  genre!: string;
}
