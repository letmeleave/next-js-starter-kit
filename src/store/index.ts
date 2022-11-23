import { Context, createWrapper, HYDRATE } from 'next-redux-wrapper';
import type { Reducer } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';
import type { RootState } from './types';
import { Action } from './types';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer: Reducer<RootState, Action<string, RootState>> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...action.payload,
      ...state,
    };
  } else {
    return rootReducer(state, action);
  }
};

const initStore = (_context: Context) => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
