import { Component, OnInit } from '@angular/core';

import { TodoItem } from './model/todo-item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodoList();
  }

  private loadTodoList(): void {
    this.todoService.getTodoList().then(todoList => {
      this.todoList = todoList;
      console.log('todo list', this.todoList);
    });
  }

}
