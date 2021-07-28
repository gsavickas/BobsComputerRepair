import { Injectable } from '@angular/core';
import { IRepair } from './repair.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  
  inCart: Array<IRepair> = [];

  constructor() {
   }

  
}
