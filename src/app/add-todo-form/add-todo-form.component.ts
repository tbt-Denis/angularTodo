import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {

  title: string = ''

  constructor(public todosService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date()
    }
    if (todo.title) {
      this.todosService.addTodo(todo)
      this.title = ''
    }
  }

}
