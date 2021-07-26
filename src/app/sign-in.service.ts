/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 11 July 2021
 * Description: App component
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  userIds: Array<number>;

  constructor() {
    this.userIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

   validate(userIds: number) {
    return this.userIds.some(id => id === userIds);
  }
}
