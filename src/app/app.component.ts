import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';
import { Item } from './item';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'laugh', done: false },
    { description: 'play', done: false },
  ];

  /**
   *
   */
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item): boolean => {
      return this.filter === 'done' ? item.done : !item.done;
    });
  }

  addItem(description: string): void {
    this.allItems.unshift({
      // The line below is confusing, why description instead of description: description
      description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
