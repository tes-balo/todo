import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TodoListService } from './services/todo-list.service';
import { EditorComponent } from './components/editor/editor.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { ActiveEditorComponent } from './components/editor/active-editor/active-editor.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, ListComponent, EditorComponent, ShellComponent, ActiveEditorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
