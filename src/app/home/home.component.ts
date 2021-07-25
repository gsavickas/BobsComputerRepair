/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 11 July 2021
 * Description: App component
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IRepair } from '../repair.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repairItems: Array<IRepair> = [];

  repairServiceForm: FormGroup

  constructor(private fb: FormBuilder) {

    this.repairServiceForm = {} as FormGroup;
   }

  ngOnInit(): void {
    this.repairServiceForm = this.fb.group({
      title: ['', Validators.required],
      cost: ['', Validators.required],
      
    })
  }

  get form(){
    return this.repairServiceForm.controls;
  }


  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
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
