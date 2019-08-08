import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddressViewComponent } from './search-address-view.component';

describe('SearchAddressViewComponent', () => {
  let component: SearchAddressViewComponent;
  let fixture: ComponentFixture<SearchAddressViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddressViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
