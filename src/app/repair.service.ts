import { Injectable } from '@angular/core';
import { RepairItem } from './repair-item.interface'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  // repairId: number;
  //   type: string;
  //   title: string;
  //   cost: number;
  //   // TODO: Add this as a time object
  //   repairTime: string;

    repairs: Array<RepairItem>

  constructor() {
    this.repairs = [
      {
        repairId: 12345,
        type: "Phone",
        title: "phone screen",
        cost: 80,
        repairTime: "1 hr",
        description: "Replace phone screen"
      },
      {
        repairId: 12346,
        type: "laptop",
        title: "wifi",
        cost: 200,
        repairTime: "2 hr",
        description: "Replace wifi connector"
      },
      {
        repairId: 12347,
        type: "computer",
        title: "upgrade ram + 8gb",
        cost: 60,
        repairTime: "30 min",
        description: "Upgrade ram by 8gb"
      }
    ]
  }

  getRepairs(): Observable<>

   searchByTitle(: string){
    return this.title.some(title => title === repairTitle);
   }
}
