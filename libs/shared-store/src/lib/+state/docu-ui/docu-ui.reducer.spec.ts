// import { DocuUiLoaded } from './docu-ui.actions';
// import {
//   DocuUiState,
//   Entity,
//   initialState,
//   docuUiReducer
// } from './docu-ui.reducer';

// describe('DocuUi Reducer', () => {
//   const getDocuUiId = it => it['id'];
//   let createDocuUi;

//   beforeEach(() => {
//     createDocuUi = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('valid DocuUi actions ', () => {
//     it('should return set the list of known DocuUi', () => {
//       const docuUis = [
//         createDocuUi('PRODUCT-AAA'),
//         createDocuUi('PRODUCT-zzz')
//       ];
//       const action = new DocuUiLoaded(docuUis);
//       const result: DocuUiState = docuUiReducer(initialState, action);
//       const selId: string = getDocuUiId(result.list[1]);

//       expect(result.loaded).toBe(true);
//       expect(result.list.length).toBe(2);
//       expect(selId).toBe('PRODUCT-zzz');
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the initial state', () => {
//       const action = {} as any;
//       const result = docuUiReducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
