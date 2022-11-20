import {Component, OnInit} from '@angular/core';
import {Item} from './item';
import {greetUser, STARTING_INDEX} from 'src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
    window.addEventListener('load', greetUser);
    console.log('page is fully loaded');
  }
  inputTitle = '';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Item[] = [
    {description: 'Schedule social posts', done: true},
    {description: 'Emails and organization', done: false},
    {description: 'Slack Call', done: false},
    {description: 'Lunch', done: false},
    {description: 'Work out', done: false},
  ];

  darkMode = false;

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item): boolean => {
      return this.filter === 'done' ? item.done : !item.done;
    });
  }

  addItem(description: string): void {
    if (!description || description === ' ') {
      return;
    }
    this.allItems.unshift({
      // NOTE: description below is shorthand for description: description
      // It's the shorthand syntax introduced in es6
      description,
      done: false,
    });
    this.inputTitle = '';
  }

  removeItem(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), STARTING_INDEX);
  }

  changeTitle(event: Event): void {
    console.log(event);
    this.inputTitle = (<HTMLInputElement>event.target).value;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
