// import { Entity, DocuUiState } from './docu-ui.reducer';
// import { docuUiQuery } from './docu-ui.selectors';

// describe('DocuUi Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getDocuUiId = it => it['id'];

//   let storeState;

//   beforeEach(() => {
//     const createDocuUi = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//     storeState = {
//       docuUi: {
//         list: [
//           createDocuUi('PRODUCT-AAA'),
//           createDocuUi('PRODUCT-BBB'),
//           createDocuUi('PRODUCT-CCC')
//         ],
//         selectedId: 'PRODUCT-BBB',
//         error: ERROR_MSG,
//         loaded: true
//       }
//     };
//   });

//   describe('DocuUi Selectors', () => {
//     it('getAllDocuUi() should return the list of DocuUi', () => {
//       const results = docuUiQuery.getAllDocuUi(storeState);
//       const selId = getDocuUiId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelectedDocuUi() should return the selected Entity', () => {
//       const result = docuUiQuery.getSelectedDocuUi(storeState);
//       const selId = getDocuUiId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it("getLoaded() should return the current 'loaded' status", () => {
//       const result = docuUiQuery.getLoaded(storeState);

//       expect(result).toBe(true);
//     });

//     it("getError() should return the current 'error' storeState", () => {
//       const result = docuUiQuery.getError(storeState);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
