// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule} from './app-routing.module';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component'; 
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';  // Adjust the path accordingly
import { Todo } from './Todo';  // Adjust the path accordingly
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';


@NgModule({
  declarations: [
    // AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    Todo,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule,  // Include CommonModule here
    
    // ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
