import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../Todo';

@Component({
  selector: 'app-todos',
  standalone: false,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  localItem!: string | null;
  todos: Todo[];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      console.warn("localStorage is not available in this environment.");
      this.localItem = null;
      this.todos = [];
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  AddTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  checkTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active =!this.todos[index].active;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

}
