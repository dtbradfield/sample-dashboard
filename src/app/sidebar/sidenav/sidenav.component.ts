import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sideMessage: string = 'hide';

  showSidenav: boolean = true;

  onSideNav() {
    this.showSidenav = !this.showSidenav;
    if (this.showSidenav) {
      this.sideMessage = 'hide'
    } else {this.sideMessage = 'show'}
  }

}
