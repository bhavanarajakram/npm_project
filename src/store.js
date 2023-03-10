import { legacy_createStore  as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./Reducer/rootReducer";

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;