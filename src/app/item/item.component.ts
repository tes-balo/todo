import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})

/* NOTE
* should implements OnInIt and constructor be removed?
  are they relevant for this project?
*/
export class ItemComponent {
  editable = true;
  /* NOTE: why are both inputs returning error without the non-nullish operator?? */
  // Expect inputs (i.e items to display) from AppComponent
  @Input() item!: Item;
  @Output() remove: EventEmitter<Item> = new EventEmitter();

  saveItem(description: string) {
    if (!description || description === ' ') {return}
    this.editable = true;
    this.item.description = description;
  }
}
