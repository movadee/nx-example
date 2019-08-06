import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';

import { GooglePlaceApiService } from 'libs/shared-services/src/lib/services/google-place-api.service';

@Component({
  selector: 'bmo-google-place-autocomplete',
  templateUrl: './google-place-autocomplete.component.html',
  styleUrls: ['./google-place-autocomplete.component.scss']
})
export class GooglePlaceAutocompleteComponent implements OnInit {

  searchInput: FormControl;
  items: any = [];
  subscriptions: Subscription[] = [];
  placeService: any;
  selected: any;
  showPanel = false;

  constructor(
    private googlePlaceApi: GooglePlaceApiService,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.searchInput = new FormControl('');

    this.subscriptions.push(
      this.searchInput.valueChanges.pipe(
        debounceTime(400)
      ).subscribe(value => this.search(value))
    );

    this.mapsAPILoader.load().then(() => {
      this.placeService = new (window as any).google.maps.places.AutocompleteService();
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  search(value: string) {
    if (!value) {
      this.items = [];
      this.hide();
      return;
    }
    this.placeService.getPlacePredictions({ input: value }, result => {
      this.items = result || [];
      this.show();
    });
    // this.subscriptions.push(
    //   this.googlePlaceApi.search(value).subscribe(
    //     (res: any) => {
    //       this.output = res;
    //     },
    //     (error) => {
    //       this.output = error;
    //     }
    //   )
    // )
  }

  selectItem(item: any) {
    this.selected = item;
    this.searchInput.setValue(`${item.description}`);
    this.hide();
  }

  hide() {
    this.showPanel = false;
  }

  show() {
    if (this.items.length)
      this.showPanel = true;
  }
}
