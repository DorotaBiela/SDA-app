import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsComponent } from './students/students.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

/*
  Views module - wspólny moduł dla wszystkich widoków w aplikacji.
  Bardzo ogólny moduł; można tworzyć moduł per widok (np. moduł dla ToDo, moduł dla Students),
  czy też tworzyć moduł na podstawie jakiejś części aplikacji.
*/

@NgModule({
  declarations: [
    TodoComponent,
    StudentsComponent,
    PageNotFoundComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    TodoComponent,
    StudentsComponent,
    PageNotFoundComponent
  ],
})
export class ViewsModule { }
