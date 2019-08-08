import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bmo-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @Input() latitude: number = 43.6490208;
  @Input() longitude: number = -79.49495059999998;
  @Input() zoom: number = 16;
  @Input() width = '600px';
  @Input() height = '400px';

  constructor() { }

  ngOnInit() {
  }

}
