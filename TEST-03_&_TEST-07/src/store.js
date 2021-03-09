import { createStore } from 'redux';
import appReducer from './module/combinereducers';

const store = createStore(appReducer)

export default store;
