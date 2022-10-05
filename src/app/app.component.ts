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
    window.addEventListener('load', greetUser);
    console.log('page is fully loaded');
  }
  ngOnInit(): void {
    //empty
  }
  title = '';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
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
      // NOTE: The line below is confusing, why description instead of description: description
      // Its the shorthand syntax introduced in es6
      description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), STARTING_INDEX);
  }

  changeTitle(event: Event, newItem: HTMLInputElement): void {
    console.log(event);
    this.title = (<HTMLInputElement>event.target).value;
    console.log(this.title);
    console.log(newItem);
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
