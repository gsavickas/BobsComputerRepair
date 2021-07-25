/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 11 July 2021
 * Description: App component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  cost!: number;
  @Input()
  description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
