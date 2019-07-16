import { Entity, CommentsState } from './comments.reducer';
import { commentsQuery } from './comments.selectors';

describe('Comments Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCommentsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createComments = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      comments: {
        list: [
          createComments('PRODUCT-AAA'),
          createComments('PRODUCT-BBB'),
          createComments('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Comments Selectors', () => {
    it('getAllComments() should return the list of Comments', () => {
      const results = commentsQuery.getAllComments(storeState);
      const selId = getCommentsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedComments() should return the selected Entity', () => {
      const result = commentsQuery.getSelectedComments(storeState);
      const selId = getCommentsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = commentsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = commentsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
