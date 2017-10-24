import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  selectedNumber = 0;
  addNewTodo(newTodoContent) {
    this.todos.push({done: false, content: newTodoContent, invisible: this.selectedNumber === 1 ? 'invisible' : '' });
  }

  changeList(selectedNumber) {
    this.selectedNumber = selectedNumber;
  }
}
