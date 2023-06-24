import { TodoListService } from '../services/todo-list.service';
import { Router } from '@angular/router';
import { greet } from 'src/main';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { v4 as uuidv4 } from 'uuid';

// import { GreetUserService } from '../services/greet-user.service';

const uniqueId = uuidv4;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // GreetUserService: GreetUserService;
  TodoListService: TodoListService; // initialized in constructor

  RouterService: Router;

  todoList!: Item[];

  inputTitle = '';

  filter: 'all' | 'active' | 'done' = 'all';

  darkMode = false;

  visible = true;

  currentRoute = '';

  constructor(TodoList: TodoListService, router: Router) {
    this.TodoListService = TodoList;
    // TODO: this.GreetUserService = GreetUserService;
    // TODO: Use private constructor to instantiate a singleton
    this.RouterService = router;
    console.log(this.RouterService.url);
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
      return; // prevent user from submitting non-string values
    }
    this.TodoListService.addItem({
      // NOTE: description below is shorthand for description: description
      // It's the shorthand syntax introduced in es6
      description,
      done: false,
      id: uniqueId(),
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
