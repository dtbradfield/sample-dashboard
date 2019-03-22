import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-dashboard';

  constructor() { }
  
  hideIt: boolean = true;

  onHideIt() {
    this.hideIt = !this.hideIt;
  } 

}
