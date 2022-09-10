import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';
import { Item } from './item';
import { ItemComponent } from './item/item.component';
import { greetUser, STARTING_INDEX } from 'src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor () {
    window.addEventListener('load', greetUser);
    console.log('page is fully loaded');
  }
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Schedule social posts', done: true },
    { description: 'Emails and organization', done: false },
    { description: 'Slack Call', done: false },
    { description: 'Lunch', done: false },
    { description: 'Work out', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item): boolean => {
      return this.filter === 'done' ? item.done : !item.done;
    });
  }

  addItem(description: string): void {
    if (!description || description === ' ') {return}
    this.allItems.unshift({
      // The line below is confusing, why description instead of description: description
      description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), STARTING_INDEX);
  }
}
