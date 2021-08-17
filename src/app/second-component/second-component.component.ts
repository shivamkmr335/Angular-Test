import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <app-FirstComponent></app-FirstComponent>
    <app-FirstComponent></app-FirstComponent>`,
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
