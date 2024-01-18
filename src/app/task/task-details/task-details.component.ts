import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  Task: any[] = [];
  constructor( private taskService:TaskService){

  }
  ngOnInit(){
    this.Task=this.taskService.getList();
  }

}
