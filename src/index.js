import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux"
import { createStore } from "redux"
import hasketballReducer from "./hasketballReducer"

const store = createStore(hasketballReducer)
store.dispatch({type:"@@INIT"})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
