// import { Entity, LocalDocuUiState } from './local-docu-ui.reducer';
// import { localDocuUiQuery } from './local-docu-ui.selectors';

// describe('LocalDocuUi Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getLocalDocuUiId = it => it['id'];

//   let storeState;

//   beforeEach(() => {
//     const createLocalDocuUi = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//     storeState = {
//       localDocuUi: {
//         list: [
//           createLocalDocuUi('PRODUCT-AAA'),
//           createLocalDocuUi('PRODUCT-BBB'),
//           createLocalDocuUi('PRODUCT-CCC')
//         ],
//         selectedId: 'PRODUCT-BBB',
//         error: ERROR_MSG,
//         loaded: true
//       }
//     };
//   });

//   describe('LocalDocuUi Selectors', () => {
//     it('getAllLocalDocuUi() should return the list of LocalDocuUi', () => {
//       const results = localDocuUiQuery.getAllLocalDocuUi(storeState);
//       const selId = getLocalDocuUiId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelectedLocalDocuUi() should return the selected Entity', () => {
//       const result = localDocuUiQuery.getSelectedLocalDocuUi(storeState);
//       const selId = getLocalDocuUiId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it("getLoaded() should return the current 'loaded' status", () => {
//       const result = localDocuUiQuery.getLoaded(storeState);

//       expect(result).toBe(true);
//     });

//     it("getError() should return the current 'error' storeState", () => {
//       const result = localDocuUiQuery.getError(storeState);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
