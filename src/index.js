import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
import './index.css'
import store from './redux/redux-store'
import App from './App';

const renderEntireTree = (state) =>  {
  ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

serviceWorker.unregister();