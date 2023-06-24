import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
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
  editable = false;

  RouterService: Router;

  /* NOTE: why are both inputs returning error without the non-nullish operator?? */
  // Expect inputs (i.e items to display) from AppComponent
  @Input() item!: Item;

  @Input() name!: string; // what's this for??

  @Output() remove: EventEmitter<Item> = new EventEmitter();

  constructor(router: Router) {
    this.RouterService = router;
  }

  saveItem(description: string) {
    if (!description || description === ' ') {
      return;
    }
    this.editable = false;
    this.item.description = description;
  }

  openEditor(): void {
    this.RouterService.navigateByUrl('/editor');
  }
}
