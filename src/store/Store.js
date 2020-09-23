import RootReducers from '../reducers/rootreducers';
import {createStore} from 'redux';

const store = createStore(RootReducers)

export default store;