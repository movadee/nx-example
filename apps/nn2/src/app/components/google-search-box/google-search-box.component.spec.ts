import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearchBoxComponent } from './google-search-box.component';

describe('GoogleSearchBoxComponent', () => {
  let component: GoogleSearchBoxComponent;
  let fixture: ComponentFixture<GoogleSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
