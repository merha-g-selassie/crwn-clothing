import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [logger];
const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, enhancers);
export const persistor = persistStore(store);
export default { store, persistor };
