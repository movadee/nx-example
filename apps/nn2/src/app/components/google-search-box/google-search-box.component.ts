import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Title } from '@angular/platform-browser';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bmo-google-search-box',
  templateUrl: './google-search-box.component.html',
  styleUrls: ['./google-search-box.component.scss']
})
export class GoogleSearchBoxComponent implements OnInit {
  @ViewChild('search', { static: true })
  searchBox: any;

  search: google.maps.places.SearchBox;
  location: google.maps.LatLng;

  constructor(private mapApi: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapApi.load().then(() => this.setSearchBox());
  }

  setSearchBox() {
    this.search = new google.maps.places.SearchBox(this.searchBox.nativeElement);
    this.search.addListener('places_changed', () => {
      const places = this.search.getPlaces();
      this.location = places[0].geometry.location;
    });
  }

  canadaPostSelected(event) {
    this.searchBox.nativeElement.value = `${event.Text} ${event.Description}`;
    this.searchBox.nativeElement.focus();
    setTimeout(() => google.maps.event.trigger(this.searchBox.nativeElement, 'keydown', { keyCode: 13 }));
  }
}
