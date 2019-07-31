// import { NgModule } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { readFirst } from '@nrwl/angular/testing';

// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule, Store } from '@ngrx/store';

// import { NxModule } from '@nrwl/angular';

// import { DocuUiEffects } from './docu-ui.effects';
// import { DocuUiFacade } from './docu-ui.facade';

// import { docuUiQuery } from './docu-ui.selectors';
// import { LoadDocuUi, DocuUiLoaded } from './docu-ui.actions';
// import {
//   DocuUiState,
//   Entity,
//   initialState,
//   docuUiReducer
// } from './docu-ui.reducer';

// interface TestSchema {
//   docuUi: DocuUiState;
// }

// describe('DocuUiFacade', () => {
//   let facade: DocuUiFacade;
//   let store: Store<TestSchema>;
//   let createDocuUi;

//   beforeEach(() => {
//     createDocuUi = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('used in NgModule', () => {
//     beforeEach(() => {
//       @NgModule({
//         imports: [
//           StoreModule.forFeature('docuUi', docuUiReducer, { initialState }),
//           EffectsModule.forFeature([DocuUiEffects])
//         ],
//         providers: [DocuUiFacade]
//       })
//       class CustomFeatureModule {}

//       @NgModule({
//         imports: [
//           NxModule.forRoot(),
//           StoreModule.forRoot({}),
//           EffectsModule.forRoot([]),
//           CustomFeatureModule
//         ]
//       })
//       class RootModule {}
//       TestBed.configureTestingModule({ imports: [RootModule] });

//       store = TestBed.get(Store);
//       facade = TestBed.get(DocuUiFacade);
//     });

//     /**
//      * The initially generated facade::loadAll() returns empty array
//      */
//     it('loadAll() should return empty list with loaded == true', async done => {
//       try {
//         let list = await readFirst(facade.allDocuUi$);
//         let isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);

//         facade.loadAll();

//         list = await readFirst(facade.allDocuUi$);
//         isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(true);

//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });

//     /**
//      * Use `DocuUiLoaded` to manually submit list for state management
//      */
//     it('allDocuUi$ should return the loaded list; and loaded flag == true', async done => {
//       try {
//         let list = await readFirst(facade.allDocuUi$);
//         let isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);

//         store.dispatch(
//           new DocuUiLoaded([createDocuUi('AAA'), createDocuUi('BBB')])
//         );

//         list = await readFirst(facade.allDocuUi$);
//         isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(2);
//         expect(isLoaded).toBe(true);

//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });
//   });
// });
