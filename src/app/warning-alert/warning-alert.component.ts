import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div  class="p-4 text-red-500 bg-red-200 w-full text-center" >Waring: Error Message</div>`,
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
