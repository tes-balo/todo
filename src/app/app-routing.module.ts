import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { ShellComponent } from './shell/shell.component';
import { ActiveEditorComponent } from './components/editor/active-editor/active-editor.component';

const routes: Routes = [
  // { path: 'editor/:id', component: EditorComponent },
  {
    path: 'editor',
    title: 'Editor',
    component: EditorComponent,
    pathMatch: 'full',
    children: [{ path: ':id', title:'ActiveEditor', component: ActiveEditorComponent, pathMatch: 'full' }],
  },
  { path: '', component: ShellComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
