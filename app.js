import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import todoApp from './reducers/index';
import { Router, Route, browserHistory } from 'react-router'
import About from './About'
//import SimpleCounter from './SimpleCounter';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter'

const store = createStore(
  combineReducers({
    todos,
    visibilityFilter,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
