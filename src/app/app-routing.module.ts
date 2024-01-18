import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Routes = [{ path: 'createTask', component: CreateTaskComponent },
{ path: 'viewTask', component: TaskListComponent },
{ path: 'taskDetail', component: TaskDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
