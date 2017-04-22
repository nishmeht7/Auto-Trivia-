import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AddQuestion from './components/addQuestion.js';
import store from './store.js';
import TriviaGamePlay from './components/TriviaGamePlay.js';
import TriviaContainer from './containers/TriviaContainer.js';

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AddQuestion} />
        <Route path="/questions" component={TriviaContainer}/>
      </Router>
    </Provider>
  );
}