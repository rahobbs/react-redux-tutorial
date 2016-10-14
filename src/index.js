import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import MenuContainer from './containers/MenuContainer';
import PlateContainer from './containers/PlateContainer';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={MenuContainer}/>
        <Route path="/menu" component={MenuContainer} />
        <Route path="/plate" component={PlateContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
