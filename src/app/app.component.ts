import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Project';
  
  constructor(){
  // setTimeout(() => {
  //   this.title = "Change title"
  // }, 2000);
  }
}

// @NgModule({
//   declarations: [
//     // AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     // TodosModule  // Include TodosModule here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
