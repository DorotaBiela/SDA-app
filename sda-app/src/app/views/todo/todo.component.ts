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

  /*
    ngOnInit - hook z cykla życia komponentu;
    wywoływany tylko raz; zaraz po konstruktorze oraz ngOnChanges

    Wykorzystujemy ten hook do inicjalizacji danych, które potrzebne są w naszym widoku (komponencie).
  */
  ngOnInit(): void {
    this.loadTodoList();
    this.todoForm = this.createTodoForm();
  }

  // metoda stworzenia obiektu formularza z danymi: description (domyślnie '') oraz isDone (domyślnie false)
  private createTodoForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
      isDone: [false]
    });
  }

  /*
    metoda wywołujące metodę pobrania listy todo w serwisie
    wraz z przypisaniem wyniku pobrania do zmiennej przechowującej listę w naszym komponencie
  */
  private loadTodoList(): void {
    this.todoService.getTodoList().then(todoList => {
      this.todoList = todoList;
      console.log('todo list', this.todoList);
    });
  }

  // metoda wywołująca metodę dodawania nowego todo w serwisie wraz obsługą pomyślnego dodania nowego Todo
  addTodoItem(): void {
    this.todoService.addTodoItem(this.todoForm.value).then(() => {
      this.loadTodoList();
      this.todoForm.reset();
    });
  }

  // metoda wywołująca metodę usuwania todo w serwisie wraz obsługą pomyślnego usunięcia nowego Todo
  removeTodo(id: number) {
    this.todoService.removeTodoItem(id).then(() => this.loadTodoList());
  }

}
