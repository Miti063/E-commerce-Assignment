import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import CombineReducer from './CombineReducer';

export default createStore(CombineReducer, {}, applyMiddleware(ReduxThunk));
