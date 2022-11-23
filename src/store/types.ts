import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import rootReducer from '@/store/rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export type IRootActions = AnyAction;

export type Action<T, P = {}> = {
  type: T;
  payload: P;
};

export type NextThunkDispatch = ThunkDispatch<
  RootState,
  void,
  {
    type: string;
    payload: any;
  }
>;
