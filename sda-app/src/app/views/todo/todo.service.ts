import { Injectable } from '@angular/core';
import { TODO_LIST } from './todo.mock';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(): Promise<TodoItem[]> {
    return Promise.resolve(TODO_LIST);
  }
}
