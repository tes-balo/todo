import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [AppComponent, ItemComponent, ListComponent],
  imports: [BrowserModule],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
