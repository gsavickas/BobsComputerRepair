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

  repairItems: Array<IRepair> = [
    {
      repairId: 12345,
      type: "screen",
      title: "Phone screen",
      cost: 200,
      repairTime: "1 hr",
      description: "Replace cell phone screen."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },{
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    },
    {
      repairId: 12345,
      type: "wifi",
      title: "Phone wifi connector",
      cost: 150,
      repairTime: "2 hr",
      description: "Replace WiFi connection within cell phone."
    }
  ];

  

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
