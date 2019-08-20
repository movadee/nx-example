import { Component, OnInit, Input, ViewChild, OnChanges, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'bmo-street-map',
  templateUrl: './street-map.component.html',
  styleUrls: ['./street-map.component.scss']
})
export class StreetMapComponent implements OnInit {
  _latitude: number = 43.6490208;
  _location: google.maps.LatLng;

  @Input()
  set latitude(value: number) {
    this._latitude = value;
  }

  get latitude() {
    return this._latitude;
  }

  @Input()
  set location(value: any) {
    this._location = value;
    if (!value)
      return;
    if (this.streetInstance)
      this.setPosition();
    else
      setTimeout(() => this.setPosition(), 300);
  };

  get location() {
    return this._location;
  }

  @Input() longitude: number = -79.49495059999998;
  @Input() zoom: number = 14;
  @Input() heading: number = 20;
  @Input() pitch: number = 0;
  @Input() scrollwheel: boolean = true;
  @Input() width = '500px';
  @Input() height = '300px';

  @ViewChild('streetview', { static: true })
  streetView: ElementRef;

  @ViewChild('streetmap', { static: true })
  streetMap: ElementRef;

  mapInstance: google.maps.Map;
  streetInstance: google.maps.StreetViewPanorama;

  constructor(
    private _mapsApi: MapsAPILoader
  ) { }

  ngOnInit() {
    const center = {lat: 42.345573, lng: -71.098326};
    this._mapsApi.load().then(() => {
      this.mapInstance = new google.maps.Map(this.streetMap.nativeElement, {
        center,
        zoom: this.zoom
      });
      this.streetInstance = new google.maps.StreetViewPanorama(this.streetView.nativeElement, {
        zoom: 0
      });
      this.mapInstance.setStreetView(this.streetInstance);
    });
  }

  setPosition() {
    this.mapInstance.setCenter(this.location);
    this.streetInstance.setPosition(this.location);
    setTimeout(() => {
      const heading = google.maps.geometry.spherical.computeHeading(this.streetInstance.getLocation().latLng, this.location);
      this.streetInstance.setPov({
        heading,
        pitch: this.pitch
      })
    }, 500);
  }
}
