import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList';

import store from './store';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    );
  }
}

export default App;
