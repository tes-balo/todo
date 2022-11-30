import { TodoListService } from '../services/todo-list.service';
import { greet } from 'src/main';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
// import { GreetUserService } from '../services/greet-user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // GreetUserService: GreetUserService;
  TodoListService: TodoListService; //initialized in constructor

  todoList!: Item[];

  inputTitle = '';

  filter: 'all' | 'active' | 'done' = 'all';

  darkMode = false;

  constructor(TodoListService: TodoListService) {
    this.TodoListService = TodoListService;
    // this.GreetUserService = GreetUserService;
  }
  ngOnInit(): void {
    window.addEventListener('load', greet);
    console.log('page is fully loaded');
    this.todoList = this.TodoListService.TodoList;
  }

  get TodoList(): Item[] {
    if (this.filter === 'all') {
      return this.todoList;
    }
    return this.todoList.filter((item): boolean => {
      return this.filter === 'done' ? item.done : !item.done;
    });
  }
  addItem(description: string): void {
    if (!description || description === ' ') {
      return; //prevent user from submitting non-string values
    }
    this.TodoListService.addItem({
      // NOTE: description below is shorthand for description: description
      // It's the shorthand syntax introduced in es6
      description,
      done: false,
    });
  }

  removeItem(item: Item): void {
    this.TodoListService.removeItem(item); // item here refers to the actual item gotten from the item-component HTML
  }

  changeTitle(event: Event): void {
    console.log(event);
    this.inputTitle = (<HTMLInputElement>event.target).value;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
