/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 27 June 2021
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment = "Bob's Computer Repair Shop";
}
