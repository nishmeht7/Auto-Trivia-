import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AddQuestion from './components/addQuestion.js';


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/yo" component={AddQuestion}></Route>
      </Router>
    </Provider>
  );
}