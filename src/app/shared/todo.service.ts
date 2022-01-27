import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

export interface Todo {
    id: number
    title: string
    completed: boolean
    date?: any
  }

@Injectable({providedIn:'root'})

export class TodoService  {
    public todosService: Todo[] = []

    constructor(private http: HttpClient) {}

    fetchTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .pipe(tap(todos => this.todosService = todos))
    }

      onToggleParent(id: number) {
        const index = this.todosService.findIndex(t => t.id === id)
        this.todosService[index].completed = !this.todosService[index].completed 
      }

      removeTodo(id: number) {
        this.todosService= this.todosService.filter(t => t.id != id)
      }

      addTodo(todo: Todo) {
        this.todosService.push(todo)
      }
}