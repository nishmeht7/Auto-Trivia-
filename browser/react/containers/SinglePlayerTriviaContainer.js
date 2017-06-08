import store from '../store'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { addThePoints } from '../reducers/points'
import { getRandomQuestion } from '../reducers/gamePlayReducer'

const ReactCountdownClock = require('react-countdown-clock')

class SinglePlayerTriviaContainer extends React.Component {

	constructor(props) {
		super()
	}

	onButtonClick(event){
		event.preventDefault()
		let answerBool = event.target.attributes.value.value
		let questionId = event.target.id
		if(answerBool === 'true') {
			store.dispatch(addThePoints(questionId))
			swal('Good job!', 'GREAT CHOICE!!!', 'success')
			store.dispatch(getRandomQuestion())
		}
		else {
			swal('Oops...', 'WRONG ANSWER!', 'error');
		}
	}

	onNextButton(event){
		event.preventDefault()
		store.dispatch(getRandomQuestion())
	}

	render () {
		console.log('this.props', this.props)
		let triviaObj = this.props.triviaObj
		let currentPoints = this.props.totalPoints

		let onButtonClick = this.onButtonClick
		let onNextButton = this.onNextButton

		return (

			<div>
			<div className="parentFlexContainer">      

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
							<div>
								<button className=" btn-success">
								<span onClick={onNextButton}>Next Question</span>
								</button>
							</div>
					</div>
					)
					:
					(<h3>Question: </h3>)}
			</div>
			<div className='timerFlex'>
            <ReactCountdownClock
					 seconds={45}
                     color="#000"
                     alpha={0.9}
                     size={75}
                     //onComplete={whoWon}
                      />
            </div>
            </div>
		)	
	}
}


/*------------------Container-------------------*/


function mapStateToProps(state) {
	console.log('the state is', state)
	return {
		triviaObj: state.gamePlay.question,
		totalPoints: state.points.points,
		opponentPoints: state.opponent.points,
	}
}

const mapDispatchToProps = (dispatch) => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePlayerTriviaContainer);


