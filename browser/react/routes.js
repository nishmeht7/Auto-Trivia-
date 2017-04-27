import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AddQuestion from './components/addQuestion.js';
import store from './store.js';
import axios from 'axios';
import RootContainer from './components/Root'
import { gettingQuestion } from './reducers/gamePlayReducer.js'
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
      	<Route path='/root' component={RootContainer}>
	        <Route path="/addquestion" component={AddQuestion} />
	        <Route path="/questions" component={TriviaContainer} onEnter={onTriviaEnter}/>
	    </Route>    
      </Router>
    </Provider>
  );
}