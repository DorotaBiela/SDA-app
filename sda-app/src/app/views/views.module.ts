import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    StudentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoComponent,
    StudentsComponent
  ],
})
export class ViewsModule { }