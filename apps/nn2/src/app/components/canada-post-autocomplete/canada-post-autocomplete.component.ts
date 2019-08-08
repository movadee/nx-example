import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
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
  selected: ICanadaPostApiResponseItem;

  @Output()
  onSelect = new EventEmitter();

  showPanel: boolean = false;
  doSearch: boolean = true;

  constructor(
    private canadaPostApi: CanadaPostApiService,
  ) { }

  ngOnInit() {
    this.searchInput = new FormControl('');

    this.subscriptions.push(
      this.searchInput.valueChanges.pipe(
        debounceTime(250)
      ).subscribe(value => this.search(value))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  search(value: string, LastId: string = '') {
    if (!this.doSearch) {
      this.doSearch = true;
      return;
    }
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
      this.doSearch = false;
      this.hide();
      this.searchInput.setValue(`${item.Text} ${item.Description}`);
      this.onSelect.emit(this.selected);
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
