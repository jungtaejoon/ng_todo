import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  newTodoContent: string;
  @Output() onNewTodoAdded = new EventEmitter();
  constructor() {
    this.newTodoContent = '';
  }

  ngOnInit() {
  }

  addNewTodo() {
    if(this.newTodoContent !== '') {
      this.onNewTodoAdded.emit(this.newTodoContent);
    }
    this.newTodoContent = '';
  }
}
