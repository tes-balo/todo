import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ title }}</h1>

    <app-shell></app-shell> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  constructor() {}

  ngOnInit(): void {}
}
