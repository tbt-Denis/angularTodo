import {Component, OnInit} from '@angular/core';
import { delay } from 'rxjs';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  
  public loading: boolean = true
  public searchString: string = ''

  constructor(public todos: TodoService) { }

  ngOnInit() {
    this.todos.fetchTodos()
    .pipe(delay(1000))
    .subscribe( () => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todos.onToggleParent(id)
  }

  removeTodo(id: number) {
    this.todos.removeTodo(id)
  }
}