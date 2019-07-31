// import { TestBed, async } from '@angular/core/testing';

// import { Observable } from 'rxjs';

// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { provideMockActions } from '@ngrx/effects/testing';

// import { NxModule, DataPersistence } from '@nrwl/angular';
// import { hot } from '@nrwl/angular/testing';

// import { DocuUiEffects } from './docu-ui.effects';
// import { LoadDocuUi, DocuUiLoaded } from './docu-ui.actions';

// describe('DocuUiEffects', () => {
//   let actions: Observable<any>;
//   let effects: DocuUiEffects;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         NxModule.forRoot(),
//         StoreModule.forRoot({}),
//         EffectsModule.forRoot([])
//       ],
//       providers: [
//         DocuUiEffects,
//         DataPersistence,
//         provideMockActions(() => actions)
//       ]
//     });

//     effects = TestBed.get(DocuUiEffects);
//   });

//   describe('loadDocuUi$', () => {
//     it('should work', () => {
//       actions = hot('-a-|', { a: new LoadDocuUi() });
//       expect(effects.loadDocuUi$).toBeObservable(
//         hot('-a-|', { a: new DocuUiLoaded([]) })
//       );
//     });
//   });
// });
