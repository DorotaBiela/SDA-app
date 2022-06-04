import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: TodoItem;
  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(id: number, ev: Event): void {
    ev.stopPropagation();
    this.removeItem.emit(id);
  }

}
