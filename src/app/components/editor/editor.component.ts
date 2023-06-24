import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  // router: Router;
  activatedRouteService: ActivatedRoute;
  public TodoListService!: TodoListService;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRouteService = activatedRoute;
    // this.router = RouterService;
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // goToPage(value: string) {
  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  //   };
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.router.navigate(['/', value]);
  // }

  ngOnInit(): void {
    this.activatedRouteService.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.todoItem = this.TodoListService.getTodoItem(this.id);
    })
    console.log('editor is laoded');
  }
}
