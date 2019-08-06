import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ICanadaPostApiResponse, ICanadaPostApiResponseItem, CanadaPostApiService } from '@bmo/shared-services';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'bmo-canada-post-autocomplete',
  templateUrl: './canada-post-autocomplete.component.html',
  styleUrls: ['./canada-post-autocomplete.component.scss']
})
export class CanadaPostAutocompleteComponent implements OnInit, OnDestroy {

  searchInput: FormControl;
  items: ICanadaPostApiResponseItem[] = [];
  subscriptions: Subscription[] = [];
  geocoderService: any;
  selected: ICanadaPostApiResponseItem;

  showPanel: boolean = false;

  constructor(
    private canadaPostApi: CanadaPostApiService,
    private mapsLoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.searchInput = new FormControl('');

    this.subscriptions.push(
      this.searchInput.valueChanges.pipe(
        debounceTime(250)
      ).subscribe(value => this.search(value))
    );

    this.mapsLoader.load().then(() => {
      this.geocoderService = new (window as any).google.maps.Geocoder();
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  search(value: string, LastId: string = '') {
    if (!value) {
      this.items = [];
      return;
    }
    this.subscriptions.push(
      this.canadaPostApi.search(value, {
        LastId
      }).subscribe(
        (res: ICanadaPostApiResponse) => {
          this.items = res.Items;
          this.show();
            // this.items.forEach((item, index) => {
            //   if (item.Next !== 'Retrieve')
            //     this.search(value, item.Id, index);
            //   this.geocoderService.geocode({
            //     address: item.Text
            //   }, (result, status) => {
            //     result.forEach(r => {
            //       console.log(r.geometry.location.lat(), r.geometry.location.lng());
            //     })

            //   })
            // });
        },
        (error) => {
          console.error(error);
        }
      )
    )
  }

  selectItem(item: ICanadaPostApiResponseItem) {
    if (item.Next !== 'Retrieve') {
      this.search(this.searchInput.value, item.Id);
    } else {
      this.selected = item;
      this.searchInput.setValue(`${item.Text} ${item.Description}`);
      this.hide();
    }
  }

  hide() {
    this.showPanel = false;
  }

  show() {
    if (this.items.length)
      this.showPanel = true;
  }
}
