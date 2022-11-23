import { combineReducers } from 'redux';

import metaReducer from './meta/reducers';

const rootReducer = combineReducers({ meta: metaReducer });

export default rootReducer;
