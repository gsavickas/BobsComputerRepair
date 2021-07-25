import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { IRepair } from '../repair.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  toppings: FormGroup;

  constructor(private fb: FormBuilder) {
    this.toppings = {} as FormGroup;
    });

  ngOnInit(): void {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    })
  }

  cart: Array<IRepair> = [];
}
