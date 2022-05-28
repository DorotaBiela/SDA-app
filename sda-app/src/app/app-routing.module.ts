import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { StudentsComponent } from './views/students/students.component';
import { TodoComponent } from './views/todo/todo.component';

/*
  Routing - mechanizm trasowania (tworzenia ścieżek do stron/podston (do widoków))
*/

const routes: Routes = [
  {
    path: 'todo', component: TodoComponent
  },
  {
    path: 'students', component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
