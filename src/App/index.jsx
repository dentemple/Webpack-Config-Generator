import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Routes from './Routes';
import RenderStore from '../util/RenderStore';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      value: ''
    };

    this.state = this.initialState;
  }

  componentDidMount() {
    this.setCookie();
  }

  setCookie() {
    fetch('/auth/set', { credentials: 'include' });
  }

  render() {
    return (
      <div className="app">
        <header className="header__homepage animate-slide-down">
          <h1 className="h1__title animate-slide-up">
            Webpack Config Generator
          </h1>
        </header>
        <main className="main__homepage">
          <Routes />
        </main>
        <RenderStore />
      </div>
    );
  }
}

export default hot(module)(App);
