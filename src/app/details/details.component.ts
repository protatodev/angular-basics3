import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`.whiteFive {
    background-color: blue;
    color: white;
  }`]
})

export class DetailsComponent {
  dateArray: string[] = [];
  clicked: boolean = false;

  constructor() {

  }

  addClick() {
    this.dateArray.push(new Date().toString());

    this.clicked = this.dateArray.length % 2 !== 0
  }

  getColor() {
    
    return this.dateArray.length >= 5 ? 'blue' : 'white';
  }
}