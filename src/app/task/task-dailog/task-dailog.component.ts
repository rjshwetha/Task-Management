import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-dailog',
  templateUrl: './task-dailog.component.html',
  styleUrls: ['./task-dailog.component.scss']
})
export class TaskDailogComponent {
  todoTaskForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    date: ['', [Validators.required]],
    pending:true
  });
  constructor(public dialogRef: MatDialogRef<TaskDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,
    private taskService:TaskService
 ) { }
 
 ngOnInit() {
   // will log the entire data object
   console.log(this.data)
 }
add(){
  this.todoTaskForm.value.pending=true;
  this.taskService.editList(this.todoTaskForm.value,this.data.index);
  this.dialogRef.close();
}
onCloseClick(){
  this.dialogRef.close();
}

}
