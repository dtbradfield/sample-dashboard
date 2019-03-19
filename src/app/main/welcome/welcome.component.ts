import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showWelcome: boolean = true;

  showTip: boolean = true;

  onHideWelcome() {
    this.showWelcome = !this.showWelcome;
  }

  onHideTip() {
    this.showTip = !this.showTip;
  }

}
