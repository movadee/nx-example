// import { TestBed, async } from '@angular/core/testing';

// import { Observable } from 'rxjs';

// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { provideMockActions } from '@ngrx/effects/testing';

// import { NxModule, DataPersistence } from '@nrwl/angular';
// import { hot } from '@nrwl/angular/testing';

// import { LocalDocuUiEffects } from './local-docu-ui.effects';
// import { LoadLocalDocuUi, LocalDocuUiLoaded } from './local-docu-ui.actions';

// describe('LocalDocuUiEffects', () => {
//   let actions: Observable<any>;
//   let effects: LocalDocuUiEffects;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         NxModule.forRoot(),
//         StoreModule.forRoot({}),
//         EffectsModule.forRoot([])
//       ],
//       providers: [
//         LocalDocuUiEffects,
//         DataPersistence,
//         provideMockActions(() => actions)
//       ]
//     });

//     effects = TestBed.get(LocalDocuUiEffects);
//   });

//   describe('loadLocalDocuUi$', () => {
//     it('should work', () => {
//       actions = hot('-a-|', { a: new LoadLocalDocuUi() });
//       expect(effects.loadLocalDocuUi$).toBeObservable(
//         hot('-a-|', { a: new LocalDocuUiLoaded([]) })
//       );
//     });
//   });
// });
