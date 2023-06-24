import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  // router: Router;

  constructor(RouterService: Router) {
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
    console.log('editor is laoded');
  }
}
