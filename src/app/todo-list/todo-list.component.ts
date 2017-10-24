import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: {done: boolean, content: string, invisible: string}[];
  @Input() selectedNumber: number;
  @Input() invisible: string;
  constructor() { }

  ngOnInit() {
  }

  refreshList(done: Boolean) {
    let needInvisible = false;
    switch (this.selectedNumber) {
      case 0 : break;
      case 1 : done ? needInvisible = false : needInvisible = true; break;
      case 2 : done ? needInvisible = true : needInvisible = false; break;
    }
    return needInvisible;
  }
}
