import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'bmo-search-address-view',
  templateUrl: './search-address-view.component.html',
  styleUrls: ['./search-address-view.component.scss']
})
export class SearchAddressViewComponent implements OnInit {

  geocoderService: any;
  longitude: number = 0;
  latitude: number = 0;
  location: any;

  constructor(
    private mapsLoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.mapsLoader.load().then(() => {
      this.geocoderService = new (window as any).google.maps.Geocoder();
    });
  }

  canadaPostSelected(event) {
    this.searchLocationFromAddress(event.Text);
  }

  googlePlaceSelected(event) {
    this.searchLocationFromAddress(event.description);
  }

  searchLocationFromAddress(address: string) {
    this.geocoderService.geocode({ address }, (result: any) => {
      const geo = result[0];
      if (!geo)
        return;
      this.longitude = geo.geometry.location.lng();
      this.latitude = geo.geometry.location.lat();
      this.location = geo.geometry.location;
    });
  }
}
