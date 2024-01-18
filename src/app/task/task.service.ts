import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  Task: any[] = [];
  completedTask: any[] = [];
  pendingTask:any[] = [];
  constructor() { }
  addToList(value: Partial<{ title: string | null; desc: string | null; date: string | null; }>){
    this.Task.push(value);
    this.pendingTask.push(value);
    console.log(this.Task);
  }
  getList(){
    return this.Task;
  }
  getPendingList(){
    return this.pendingTask;
  }
  getCompletedList(){
    return this.completedTask;
  }
  editList(x: Partial<{ title: string | null; desc: string | null; date: string | null; }>,index:number){
    this.Task[index]=x;
    this.pendingTask[index]=x;
  }
  updateStatus(x: Partial<{ title: string | null; desc: string | null; date: string | null; }>,index:number){
    this.completedTask.push(x);
    this.pendingTask.splice(index,1);
  }
  deleteList(x: number){
    this.Task.splice(x,1);
  }
  
}
