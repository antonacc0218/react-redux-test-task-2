import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { loadState, saveState } from './sessionStorage';

const initialState = loadState();

const enhancer = compose(
  applyMiddleware(thunk),
  process.env.NODE_ENV !== 'production' ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, initialState, enhancer);

store.subscribe(() => {
  saveState({ user: { id: store.getState().user.id } });
});

export default store;
