import { Injectable } from '@angular/core';
import { Item } from '../item';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
private todoList: Item[] = [
    {description: 'Schedule social posts', done: true},
    {description: 'Emails and organization', done: false},
    {description: 'Slack Call', done: false},
    {description: 'Lunch', done: false},
    {description: 'Work out', done: false},
];

 get TodoList(): Item[] {
    {
      return this.todoList;
    }
 }

addItem(item: Item): void {
    this.todoList.unshift(item);
    // this.inputTitle = '';
}

  removeItem(item: Item) {
    const STARTING_INDEX = 1;
    this.todoList.splice(this.todoList.indexOf(item), STARTING_INDEX);
  }
  constructor() { }
}
