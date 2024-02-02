import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // todoForm: FormGroup;
  title:string = '';
  desc:string= '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  // constructor() { }
  // constructor(private fb: FormBuilder) {
  //   this.todoForm = this.fb.group({
  //     title: ['', Validators.required],
  //     desc: ['', Validators.required]
  //   });
  // }
  
  onSubmit(){
    const todo = {
      sno: 8,
      title : this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
  // onSubmit() {
  //   if (this.todoForm.valid) {
  //     const todo: Todo = {
  //       sno: 8,
  //       title: this.todoForm.value.title,
  //       desc: this.todoForm.value.desc,
  //       active: true
  //     };
  //     this.todoAdd.emit(todo);
  //   }
  // }

}
