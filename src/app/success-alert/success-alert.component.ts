import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  template: `
    <div>Submission Successfull</div>
  `,
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
