import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoItem } from './model/todo-item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];
  todoForm: FormGroup = new FormGroup({});

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadTodoList();
    this.todoForm = this.createTodoForm();
  }

  private createTodoForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
      isDone: [false]
    });
  }

  private loadTodoList(): void {
    this.todoService.getTodoList().then(todoList => {
      this.todoList = todoList;
      console.log('todo list', this.todoList);
    });
  }

  addTodoItem(): void {
    this.todoService.addTodoItem(this.todoForm.value).then(() => {
      this.loadTodoList();
      this.todoForm.reset();
    });
  }

}
