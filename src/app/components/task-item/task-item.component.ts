import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteEvent: EventEmitter<Task>;
  faTimes = faTimes;

  constructor() { 
    this.task = {} as Task;
    this.onDeleteEvent = new EventEmitter<Task>();
  }

  ngOnInit(): void {
  }
  
  onDelete() {
    this.onDeleteEvent.emit();
  }
  
  
}
