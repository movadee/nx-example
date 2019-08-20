import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'bmo-google-place-autocomplete',
  templateUrl: './google-place-autocomplete.component.html',
  styleUrls: ['./google-place-autocomplete.component.scss']
})
export class GooglePlaceAutocompleteComponent implements OnInit, OnDestroy {

  searchInput: FormControl;
  items: any = [];
  subscriptions: Subscription[] = [];
  placeService: any;
  selected: any;
  showPanel = false;
  doSearch: boolean = true;

  @Output()
  onSelect = new EventEmitter();

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.searchInput = new FormControl('');

    this.subscriptions.push(
      this.searchInput.valueChanges.pipe(
        debounceTime(200)
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
    if (!this.doSearch) {
      this.doSearch = true;
      return;
    }
    if (!value) {
      this.items = [];
      this.hide();
      return;
    }
    this.placeService.getPlacePredictions({ input: value }, result => {
      this.items = result || [];
      this.show();
    });
  }

  selectItem(item: any) {
    this.selected = item;
    this.doSearch = false;
    this.searchInput.setValue(`${item.description}`);
    this.hide();
    this.onSelect.emit(this.selected);
  }

  hide() {
    this.showPanel = false;
  }

  show() {
    if (this.items.length)
      this.showPanel = true;
  }
}
