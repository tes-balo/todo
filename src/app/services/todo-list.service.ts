import { Injectable } from '@angular/core';
import { Item } from '../item';
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: Item[] = [
    { description: 'Schedule social posts', done: true, id: '1' },
    { description: 'Emails and organization', done: false, id: '2' },
    { description: 'Slack Call', done: false, id: '3' },
    { description: 'Lunch', done: false, id: '4' },
    { description: 'Work out', done: false, id: '5' },
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

  getTodoItem(val): string {
    return this.TodoList.find( val => val.id == id);
  }
  constructor() {}
}
