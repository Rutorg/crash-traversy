import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';
import { TmplAstElement } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  
  deleteTask(deletingTask: Task) {
    this.taskService
    .deleteTask(deletingTask)
    .subscribe(
      () => {
        this.tasks = this.tasks.filter((task) => {
           return task.id !== deletingTask.id;})
       });
  }
  
}
