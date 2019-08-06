import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaPostAutocompleteComponent } from './canada-post-autocomplete.component';

describe('CanadaPostAutocompleteComponent', () => {
  let component: CanadaPostAutocompleteComponent;
  let fixture: ComponentFixture<CanadaPostAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaPostAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaPostAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
