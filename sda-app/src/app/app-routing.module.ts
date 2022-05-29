import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
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
  },
  {
    path: '', redirectTo: '/todo', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
