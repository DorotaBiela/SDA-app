import { Injectable } from '@angular/core';
import { TODO_LIST } from './todo.mock';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: TodoItem[] = [];

  constructor() {
    this.todoList = TODO_LIST;
  }

  getTodoList(): Promise<TodoItem[]> {
    return Promise.resolve(this.todoList);
  }

  addTodoItem(todo: TodoItem): Promise<number> {
    const ids: number[] = this.todoList.map(todoItem => todoItem.id); // [1, 2, 3]
    let id: number = ids.length ? Math.max.apply(Math, ids) + 1 : 1;

    return Promise.resolve(
      this.todoList.push({
        ...todo,
        id
      })
    );
  }

  removeTodoItem(id: number): Promise<TodoItem[]> {
    const index: number = this.todoList.findIndex(todoItem => todoItem.id === id);

    return Promise.resolve(this.todoList.splice(index, 1));
  }
}
