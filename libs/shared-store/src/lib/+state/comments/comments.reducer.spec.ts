import { CommentsLoaded } from './comments.actions';
import {
  CommentsState,
  Entity,
  initialState,
  commentsReducer
} from './comments.reducer';

describe('Comments Reducer', () => {
  const getCommentsId = it => it['id'];
  let createComments;

  beforeEach(() => {
    createComments = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Comments actions ', () => {
    it('should return set the list of known Comments', () => {
      const commentss = [
        createComments('PRODUCT-AAA'),
        createComments('PRODUCT-zzz')
      ];
      const action = new CommentsLoaded(commentss);
      const result: CommentsState = commentsReducer(initialState, action);
      const selId: string = getCommentsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = commentsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
