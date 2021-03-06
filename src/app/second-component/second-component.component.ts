import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
})
export class SecondComponentComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Mo new Server was created";
  serverName='Default Server Name';

  constructor() {
    setTimeout( ()=>{
      this.allowNewServer = true;
    } ,2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created! Server Name is' + this.serverName ;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
