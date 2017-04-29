import store from '../store'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addThePoints } from '../reducers/points'
import { displayingQuestion, getRandomQuestion } from '../reducers/gamePlayReducer.js';
const ReactCountdownClock = require('react-countdown-clock')
import io from 'socket.io-client'
//import TriviaGamePlayExtra from '../components/TriviaGamePlayExtra.js';


class TriviaContainer extends React.Component {

	constructor(props){
		super()
		this.onButtonClick = this.onButtonClick.bind(this)
		this.onNextButton = this.onNextButton.bind(this)
	}

	onButtonClick(event){
		//event.preventDefault()
		let answerBool = event.target.attributes.value.value
		let questionId = event.target.id
		if(answerBool === "true") {
			store.dispatch(addThePoints(questionId))
			.then(function(){
				console.log('points:', props.totalPoints)})
		}
	}

	onNextButton(event){
		event.preventDefault()
		store.dispatch(getRandomQuestion())
	}

	render() {
		let triviaObj = this.props.triviaObj
		let currentPoints = this.props.totalPoints
		//let handleSubmit = this.handleSubmit
		let onButtonClick = this.onButtonClick
		let onNextButton = this.onNextButton
		return (

			<div className="trivia">      
				{console.log('inside return ', this.props)}

				{
					triviaObj ?
					(
					<div className='mainFlexContainer'>
						<h3>
							{ triviaObj.question.questionText }
						</h3>
						<h4>
							Your Score: {currentPoints}
						</h4>
						<img src={ triviaObj.question.questionImgUrl } className="img-thumbnail" width="500" height="500"/>
								<h3>Choose Your Answer </h3> 
							<div className='answerFlex'>
							        {triviaObj.answers.map(function(elem){
							      		return	(<button className="answerItems btn-info">
								      	    	<span id={elem.QId} value={elem.correct} onClick={onButtonClick}>{elem.answerText}</span>
								      	    	</button>)
				
								    })}
							</div>
							<button className=" btn-success">
							<span onClick={onNextButton}>Next Question</span>
							</button>
				            <ReactCountdownClock className='timerFlex'
									 seconds={60}
				                     color="#000"
				                     alpha={0.9}
				                     size={75}
				                      />
					</div>
					)
					:
					(<h3>Question: </h3>)}
			</div>
	)
	}
}


/*------------------Container-------------------*/


function mapStateToProps(state) {
	return {
		triviaObj: state.gamePlay.question,
		totalPoints: state.points.points,
	}
}

const mapDispatchToProps = (dispatch) => ({
	// displayFunc: function(){
	// 	const thunk = getRandomQuestion();
	// 	dispatch(thunk)
	// }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaContainer);
