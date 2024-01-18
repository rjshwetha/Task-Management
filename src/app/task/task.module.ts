import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDailogComponent } from "./task-dailog/task-dailog.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { TaskListComponent } from "./task-list/task-list.component";




@NgModule({
  declarations: [
    CreateTaskComponent,
    TaskDailogComponent,
    TaskDetailsComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,MatFormFieldModule,
    MatIconModule,
    MatCardModule,MatTooltipModule,
    MatDatepickerModule,MatProgressSpinnerModule,MatDialogRef
      ],
      providers: [],schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskModule { }
