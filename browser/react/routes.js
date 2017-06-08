import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import AddQuestion from './components/addQuestion.js';
import store from './store.js';
import axios from 'axios';
import RootContainer from './components/Root'
//import { gettingQuestion } from './reducers/gamePlayReducer.js'
//const gamePlayReducer = require('../../server/redux/gamePlayReducer')
//const gettingQuestion = gamePlayReducer.gettingQuestion
import { gettingQuestion } from './reducers/gamePlayReducer'
import TriviaContainer from './containers/TriviaContainer.js';
import io from 'socket.io-client'
import { initializeSocket } from './sockets'
import HomePageContainer from './containers/HomePageContainer'
import SinglePlayerTriviaContainer from './containers/SinglePlayerTriviaContainer'


// const onSocketEnter = (nextState) => {
// 	initializeSocket() 
// }

const onTriviaEnter = (nextState) => {
	initializeSocket()
	// axios.get(`api/questions/getRandom`)
	// 	.then(res => res.data)
	// 	.then(randoQuest => {
	// 		store.dispatch(gettingQuestion(randoQuest))
	// 	})
	// 	.catch(err => {
	// 		console.error(err)
	// 	})
}

const onSinglePlayerEnter = (nextState) => {
	axios.get(`api/questions/getRandom`)
		.then(res => res.data)
		.then(randoQuest => {
			console.log('random question is******', randoQuest)
			console.log('****the question is!!!!', gettingQuestion(randoQuest))
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
      		<Route path="/" component={HomePageContainer} />
      		<Route path="/singleplayer" component={SinglePlayerTriviaContainer} onEnter={onSinglePlayerEnter}/>
	        <Route path="/addquestion" component={AddQuestion} />
	        <Route path="/questions" component={TriviaContainer} onEnter={onTriviaEnter}/>
	    </Route>    
      </Router>
    </Provider>
  );
}