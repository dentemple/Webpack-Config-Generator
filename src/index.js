import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Extends support for "fetch" to additional browsers
import 'whatwg-fetch';

// Styles
import WebFont from 'webfontloader';
import 'normalize.css';

import './assets/index.css';
import configureStore from './state/store';

WebFont.load({
  google: {
    families: ['Roboto Slab', 'Open Sans']
  }
});

const store = configureStore();
let render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

const HOT_RELOAD_THESE_FILES = ['./App', './assets/index.css'];

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(HOT_RELOAD_THESE_FILES, () => {
      setTimeout(render);
    });
  }
}

render();
