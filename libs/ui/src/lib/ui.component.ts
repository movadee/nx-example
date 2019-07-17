import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmo-ui',
  template: `
    UI works!
    <bmo-add-comment></bmo-add-comment>
  `,
  styles: []
})
export class UiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
