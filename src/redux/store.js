import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleWare  from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleWare();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const configureStore = (prevState) => createStore(rootReducer, prevState, composeEnhancers(applyMiddleware(sagaMiddleWare)));

const store = configureStore({});

sagaMiddleWare.run(rootSaga)

export default store;
  