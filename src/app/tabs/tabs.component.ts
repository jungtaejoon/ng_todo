import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  selected = 0;
  tabs = ['전체', '완료', '미완'];
  @Output() onSelectedChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setSelected(idx) {
    this.selected = idx;
    this.onSelectedChanged.emit(this.selected);
  }
}
