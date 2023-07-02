import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  dateTimeControl: FormControl;

  constructor(private taskService: TaskService, fb:FormBuilder) {
    this.dateTimeControl = new FormControl();
  }
  
  ngOnInit(): void {
    // this.form = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   // Add more form controls as needed
    // });
  }

  onSubmit() {
    if (this.title && this.description) {
      this.taskService.addTask(this.title, this.description);
      this.title = '';
      this.description = '';
    }
  }
}
