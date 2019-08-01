// import { NgModule } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { readFirst } from '@nrwl/angular/testing';

// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule, Store } from '@ngrx/store';

// import { NxModule } from '@nrwl/angular';

// import { LocalDocuUiEffects } from './local-docu-ui.effects';
// import { LocalDocuUiFacade } from './local-docu-ui.facade';

// import { localDocuUiQuery } from './local-docu-ui.selectors';
// import { LoadLocalDocuUi, LocalDocuUiLoaded } from './local-docu-ui.actions';
// import {
//   LocalDocuUiState,
//   Entity,
//   initialState,
//   localDocuUiReducer
// } from './local-docu-ui.reducer';

// interface TestSchema {
//   localDocuUi: LocalDocuUiState;
// }

// describe('LocalDocuUiFacade', () => {
//   let facade: LocalDocuUiFacade;
//   let store: Store<TestSchema>;
//   let createLocalDocuUi;

//   beforeEach(() => {
//     createLocalDocuUi = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('used in NgModule', () => {
//     beforeEach(() => {
//       @NgModule({
//         imports: [
//           StoreModule.forFeature('localDocuUi', localDocuUiReducer, {
//             initialState
//           }),
//           EffectsModule.forFeature([LocalDocuUiEffects])
//         ],
//         providers: [LocalDocuUiFacade]
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
//       facade = TestBed.get(LocalDocuUiFacade);
//     });

//     /**
//      * The initially generated facade::loadAll() returns empty array
//      */
//     it('loadAll() should return empty list with loaded == true', async done => {
//       try {
//         let list = await readFirst(facade.allLocalDocuUi$);
//         let isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);

//         facade.loadAll();

//         list = await readFirst(facade.allLocalDocuUi$);
//         isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(true);

//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });

//     /**
//      * Use `LocalDocuUiLoaded` to manually submit list for state management
//      */
//     it('allLocalDocuUi$ should return the loaded list; and loaded flag == true', async done => {
//       try {
//         let list = await readFirst(facade.allLocalDocuUi$);
//         let isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);

//         store.dispatch(
//           new LocalDocuUiLoaded([
//             createLocalDocuUi('AAA'),
//             createLocalDocuUi('BBB')
//           ])
//         );

//         list = await readFirst(facade.allLocalDocuUi$);
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
