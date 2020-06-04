import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = "Jane Doe"; 
  clickCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    //add one to ClickCounter 
    this.clickCounter += 1;
  }

  setClasses(){
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4

    }
    return myClasses
  }
}
