/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 11 July 2021
 * Description: App component
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IRepair } from '../repair.interface';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repairCart: Array<IRepair> = [];

  repairItems: Array<IRepair> = [
    {
      repairId: 12345,
      type: "phone",
      title: "Phone screen",
      cost: 200,
      repairTime: "1 hr",
      description: "Replace cell phone screen."
    },
    {
      repairId: 12365,
      type: "computer",
      title: "Replace CPU",
      cost: 250,
      repairTime: "30 min",
      description: "Upgrade or replace computer CPU."
    },
    {
      repairId: 12347,
      type: "phone",
      title: "Phone Wifi Connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12348,
      type: "key board",
      title: "Key Board Cleaning",
      cost: 150,
      repairTime: "45 min",
      description: "Clean every key of a computer or laptop."
    },
    {
      repairId: 12349,
      type: "Phone",
      title: "Phone Battery",
      cost: 75,
      repairTime: "5 min",
      description: "Replace battery in cell phone."
    }

  ];

  

  repairServiceForm: FormGroup;
  // repairCartForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.repairServiceForm = {} as FormGroup;

    // this.repairCartForm = {} as FormGroup;
   }

  ngOnInit(): void {
    this.repairServiceForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  get form(){
    return this.repairServiceForm.controls;
  }

  // addToCart(event: { currentTarget: {rest: () => void; }; }) {

  // }


  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    if (this.repairItems) {

    }
    this.repairItems.push({
      title: this.form.title.value,
      cost: this.form.cost.value,
      type: this.form.type.value,
      repairId: this.form.repairId.value,
      repairTime: this.form.repairTime.value,
      description: this.form.description.value
    });

    event.currentTarget.reset();
  }



  clearEntries() {
    this.repairItems = [];
  }



}
