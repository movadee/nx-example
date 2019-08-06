import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'bmo-street-map',
  templateUrl: './street-map.component.html',
  styleUrls: ['./street-map.component.scss']
})
export class StreetMapComponent implements OnInit {
  @Input() latitude: number = 43.6490208;
  @Input() longitude: number = -79.49495059999998;
  @Input() zoom: number = 1;
  @Input() heading: number = 20;
  @Input() pitch: number = 0;
  @Input() scrollwheel: boolean = true;
  @Input() width = '600px';
  @Input() height = '400px';

  @ViewChild('streetview', { static: true })
  streetView: any;

  constructor(
    private _mapsApi: MapsAPILoader
  ) { }

  ngOnInit() {
    this._mapsApi.load().then(() => {
      const center = { lng: this.longitude, lat: this.latitude };
      new this.google.maps.StreetViewPanorama(
        this.streetView.nativeElement, {
          position: center,
          pov: { heading: this.heading, pitch: this.pitch },
          scrollwheel: this.scrollwheel
        }
      );
    });
  }

  get google() {
    return (window as any).google;
  }

}
