import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  onAddTask(task : any) {
    this.taskService.addTask(task.title, task.description);
    this.tasks = this.taskService.getTasks();
  }
}
