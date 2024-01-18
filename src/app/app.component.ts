import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task_Management_App';
  bottonClicked=true;
  constructor(){

  }
  clicked(){
if(this.bottonClicked==true){
  this.bottonClicked=false;
}
  }
  view(){

  }
}
