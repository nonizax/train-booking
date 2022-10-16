import { createStore, combineReducers } from 'redux';
import search from '../reducers/search';

const reducers = combineReducers({ search });
export const store = createStore(reducers);
