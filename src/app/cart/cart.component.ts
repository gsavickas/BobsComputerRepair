import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { IRepair } from '../repair.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private fb: FormBuilder) {
   }

   ngOnInit(): void {
  }

  cart: Array<IRepair> = [];
  
  
}
