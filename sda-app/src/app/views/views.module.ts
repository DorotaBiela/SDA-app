import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { TodoComponent } from './todo/todo.component';

/*
  Views module - wspólny moduł dla wszystkich widoków w aplikacji.
  Bardzo ogólny moduł; można tworzyć moduł per widok (np. moduł dla ToDo, moduł dla Students),
  czy też tworzyć moduł na podstawie jakiejś części aplikacji.
*/

@NgModule({
  declarations: [
    TodoComponent,
    StudentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent,
    StudentsComponent,
    PageNotFoundComponent
  ],
})
export class ViewsModule { }
