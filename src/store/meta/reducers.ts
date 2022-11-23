import { AnyAction, Reducer } from 'redux';

import { IMeta, MetaActions, MetaActionTypes } from '@/store/meta/actionTypes';

export const initialState = {
  title: '',
  description: '',
  keywords: '',
  h1: '',
  og_title: '',
  og_description: '',
  og_image: '',
};

export const metaReducer: Reducer<IMeta, MetaActions | AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MetaActionTypes.GET_META: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default metaReducer;
