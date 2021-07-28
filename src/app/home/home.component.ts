/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 11 July 2021
 * Description: App component
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IRepair } from '../repair.interface';
import { FormsModule } from '@angular/forms';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // repair items in cart
  inCart: Array<IRepair> = [];

  // existing repair items
  repairItems: Array<IRepair> = [
    {
      repairId: 12345,
      type: "phone",
      title: "Phone screen",
      cost: 200,
      repairTime: "1 hr",
      description: "Replace cell phone screen.",
      isInCart: false
    },
    {
      repairId: 12365,
      type: "computer",
      title: "Replace CPU",
      cost: 250,
      repairTime: "30 min",
      description: "Upgrade or replace computer CPU.",
      isInCart: false
    },
    {
      repairId: 12347,
      type: "phone",
      title: "Phone Wifi Connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone.",
      isInCart: false
    },
    {
      repairId: 12348,
      type: "key board",
      title: "Key Board Cleaning",
      cost: 150,
      repairTime: "45 min",
      description: "Clean every key of a computer or laptop.",
      isInCart: false
    },
    {
      repairId: 12349,
      type: "Phone",
      title: "Phone Battery",
      cost: 75,
      repairTime: "5 min",
      description: "Replace battery in cell phone.",
      isInCart: false
    }

  ];

  
  // form group
  repairServiceForm: FormGroup;

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


  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    if (this.repairItems) {

    }
    this.repairItems.push({
      title: this.form.title.value,
      cost: this.form.cost.value,
      type: this.form.type.value,
      repairId: this.form.repairId.value,
      repairTime: this.form.repairTime.value,
      description: this.form.description.value,
      isInCart: this.form.isInCart.value
    });

    event.currentTarget.reset();
  }

  // compares repair item ids to check repair item in the form
  // adds matching repair item to inCart array
  toggleCart(){
      for (let entry of this.repairItems){
        for (let i = 0; i < this.repairItems.length; i++){
          if (this.repairItems[i].repairId === entry.repairId){
            this.inCart.push(this.repairItems[i])
            console.log(this.inCart[i])
          }
        }
      }
    }
  



  clearEntries() {
    this.repairItems = [];
  }

  // get itemFromCart(): IRepair {
  //   return this.
  // }



}
