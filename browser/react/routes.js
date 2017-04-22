import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AddQuestion from './components/addQuestion.js';
import store from './store.js';
import axios from 'axios'; 
import { gettingQuestion } from './reducers/gamePlayReducer.js'
import TriviaGamePlay from './components/TriviaGamePlay.js';
import TriviaContainer from './containers/TriviaContainer.js';

const onTriviaEnter = (nextState) => {
	axios.get(`api/questions/getRandom`)
		.then(res => res.data)
		.then(randoQuest => {
			store.dispatch(gettingQuestion(randoQuest))
		})
		.catch(err => {
			console.error(err)
		})
}


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AddQuestion} />
        <Route path="/questions" component={TriviaContainer} onEnter={onTriviaEnter}/>
      </Router>
    </Provider>
  );
}