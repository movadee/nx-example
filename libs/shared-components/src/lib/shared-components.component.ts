import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abs',
  template: `
    <app-form formId="test"></app-form>
  `,
  styles: []
})
export class SharedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
