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
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { 
    this.task = {} as Task;
    this.onDeleteTask = {} as EventEmitter<Task>;
  }

  ngOnInit(): void {
  }
  
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

}
