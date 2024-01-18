import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private taskService:TaskService,
    private router: Router){ 
  }
  ngOnInit(){

  }
  todoTaskForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    date: ['', [Validators.required]],
    pending:true
  });
  processing=false;
  successful=false;
  todayDate:Date = new Date();
  
  add(){
  this.processing=true;
  this.todoTaskForm.value.pending=true;
   this.taskService.addToList(this.todoTaskForm.value)   // calling service to add the task to the list
   setTimeout(() =>{
    this.todoTaskForm.reset()
    this.processing=false;
    this.successful=true;          //successful message on adding
    setTimeout(()=>{
      this.successful=false;   //successful message vanishes after 1 second 
    },1000)
   },1000)
    
  }

}
