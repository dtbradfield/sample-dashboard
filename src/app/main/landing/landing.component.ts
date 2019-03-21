import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onLoadElement() {
    this.loading = !this.loading;
    setTimeout(() => {
      this.loading = !this.loading;
    }, 6000)
  }

}
