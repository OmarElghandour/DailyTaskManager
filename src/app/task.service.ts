import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(title: string, description: string) {
    const task: Task = {
      title: title,
      description: description
    };
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
