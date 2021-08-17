import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
})
export class SecondComponentComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setTimeout( ()=>{
      this.allowNewServer = true;
    } ,2000)
   }

  ngOnInit(): void {
  }

}
