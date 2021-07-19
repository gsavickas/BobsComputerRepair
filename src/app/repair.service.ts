import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

    repairTitle: Array<string>;

  constructor() {
    this.repairTitle= ["hard drive", "phone screen", "wifi"];
   }

   searchByTitle(repairTitle: string){
    return this.repairTitle.some(title => title === repairTitle);
   }
}
