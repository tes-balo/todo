import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
/* SECTION
* should implements OnInIt and constructor be removed?
  are they relevant for this project?
* /
export class ItemComponent implements OnInit {
  editable = false;
  constructor() {}

  ngOnInit(): void {}
}
