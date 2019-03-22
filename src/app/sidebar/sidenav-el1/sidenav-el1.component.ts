import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-el1',
  templateUrl: './sidenav-el1.component.html',
  styleUrls: ['./sidenav-el1.component.css']
})
export class SidenavEl1Component implements OnInit {

  hidden: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onHide() {
    this.hidden = !this.hidden;
  }

}
