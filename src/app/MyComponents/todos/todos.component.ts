import { Component,  NgModule,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  
  
})
export class TodosComponent implements OnInit {
  todos : Todo[] = [];
  constructor() {
    this.todos = [
      {
        sno:1,
        title:"This is title",
        desc: "Description",
        active: true
        
      },
      {
        sno:2,
        title:"This is title",
        desc: "Description",
        active: true
        
      },
      {
        sno:3,
        title:"This is title",
        desc: "Description",
        active: true
        
      },
    ]
  }

  ngOnInit():void{

  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);

  }

  addTodo(todo:Todo){
    console.log(todo);
    // const index = this.todos.indexOf(todo);
    this.todos.push(todo);

  }
}

// @NgModule({
//   imports: [CommonModule]
// })
// export class TodosModule { }