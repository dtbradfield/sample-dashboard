import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-dashboard';

  sideMessage: string = 'hide';

  ngOnInit() {}

  constructor() { }

  showSidenav: boolean = true;

  onSideNav() {
    this.showSidenav = !this.showSidenav;
    if (this.showSidenav) {
      this.sideMessage = 'hide'
    } else {this.sideMessage = 'show'}
  }


}
