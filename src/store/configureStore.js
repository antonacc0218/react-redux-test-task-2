import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './sessionStorage';

const initialState = loadState();

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({ user: { id: store.getState().user.id } });
});

export default store;
