import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDailogComponent } from '../task-dailog/task-dailog.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  Task: any[] = [];
  completedTask: any[] = [];
  constructor( private taskService:TaskService,public dialog: MatDialog){

  }
  ngOnInit(){
    this.Task=this.taskService.getPendingList();
    this.completedTask=this.taskService.getCompletedList();
  }
  edit(x: any){


  }
  del(x: any){
    this.taskService.deleteList(x);
  }
  statusUpdate(x: any,index: number){
    console.log(x);
    if(x.pending == true){
      x.pending = false;
    }
    console.log(x);
    this.taskService.updateStatus(x,index);
    

  }
  openDialog(x: any,index: number) {
    x.index=index;
    const dialogRef = this.dialog.open(TaskDailogComponent, {height: '400px',
    width: '300px',data:x});
    console.log(x)

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }


}
