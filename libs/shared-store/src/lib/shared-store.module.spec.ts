import { async, TestBed } from '@angular/core/testing';
import { SharedStoreModule } from './shared-store.module';

describe('SharedStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedStoreModule).toBeDefined();
  });
});
