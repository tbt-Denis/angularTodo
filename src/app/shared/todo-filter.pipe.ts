import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./todo.service";

@Pipe({
    name: 'todoFilter'
})

export class TodoFilterPipe implements PipeTransform{
    transform(todosService: Todo[], searchString: string = ''): Todo[] {
    if (!searchString.trim()) {
        return todosService
    }    
    return todosService.filter(todo => {
        return todo.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    })
    }

}