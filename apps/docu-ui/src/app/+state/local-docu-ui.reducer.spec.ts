// import { LocalDocuUiLoaded } from './local-docu-ui.actions';
// import {
//   LocalDocuUiState,
//   Entity,
//   initialState,
//   localDocuUiReducer
// } from './local-docu-ui.reducer';

// describe('LocalDocuUi Reducer', () => {
//   const getLocalDocuUiId = it => it['id'];
//   let createLocalDocuUi;

//   beforeEach(() => {
//     createLocalDocuUi = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('valid LocalDocuUi actions ', () => {
//     it('should return set the list of known LocalDocuUi', () => {
//       const localDocuUis = [
//         createLocalDocuUi('PRODUCT-AAA'),
//         createLocalDocuUi('PRODUCT-zzz')
//       ];
//       const action = new LocalDocuUiLoaded(localDocuUis);
//       const result: LocalDocuUiState = localDocuUiReducer(initialState, action);
//       const selId: string = getLocalDocuUiId(result.list[1]);

//       expect(result.loaded).toBe(true);
//       expect(result.list.length).toBe(2);
//       expect(selId).toBe('PRODUCT-zzz');
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the initial state', () => {
//       const action = {} as any;
//       const result = localDocuUiReducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
