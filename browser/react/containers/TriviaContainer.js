import store from '../store'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addThePoints } from '../reducers/points'
import { displayingQuestion, getRandomQuestion } from '../reducers/gamePlayReducer.js';
import io from 'socket.io-client'
import { getNextQuestion, getQuestion, initializeSocket, allPlayers } from '../sockets'
import swal from 'sweetalert'
const ReactCountdownClock = require('react-countdown-clock')
//import TriviaGamePlayExtra from '../components/TriviaGamePlayExtra.js';


class TriviaContainer extends React.Component {

	constructor(props){
		super()
		this.onButtonClick = this.onButtonClick.bind(this)
		this.onNextButton = this.onNextButton.bind(this)
		console.log('this props are cray', this.props)
	}

	onButtonClick(event){
		//event.preventDefault()
		let answerBool = event.target.attributes.value.value
		let questionId = event.target.id
		if(answerBool === 'true') {
			store.dispatch(addThePoints(questionId))
			swal('Good job!', 'GREAT CHOICE!!!', 'success')
			getQuestion()
		}
		else {
			swal('Oops...', 'WRONG ANSWER!', 'error');
		}
	}

	onNextButton(event){
		event.preventDefault()
		//store.dispatch(getRandomQuestion())
		getQuestion()
	}

	
		// whoWon(totalPoints, opponentPoints){
		// 	//console.log('hitting who won', console.log(this.props))
		// 	if (opponentPoints > totalPoints) {
		// 		swal({
		// 		  title: "STOP",
		// 		  text: "You LOST!!!",
		// 		  imageUrl: "https://cdn1.iconfinder.com/data/icons/the-competition/450/loser-512.png"
		// 		});
		// 	}
		// 	else if (opponentPoints < totalPoints) {
		// 		swal({
		// 		  title: "You WON!!!",
		// 		  text: "Here's a custom image.",
		// 		  imageUrl: "images/thumbs-up.jpg"
		// 		});
		// 	}


		// else if (this.props.opponentPoints === this.props.totalPoints) {
		// 	swal({
		// 	  title: "It's a TIE!",
		// 	  text: "Rematch?",
		// 	  type: "warning",
		// 	  showCancelButton: true,
		// 	  confirmButtonColor: "#DD6B55",
		// 	  confirmButtonText: "Yes!",
		// 	  cancelButtonText: "No, I'm a Loser",
		// 	  closeOnConfirm: false,
		// 	  closeOnCancel: false
		// 	},
		// 	function(isConfirm){
		// 	  if (isConfirm) {
		// 	    swal("Deleted!", "Your imaginary file has been deleted.", "success");
		// 	  } else {
		// 	    swal("Cancelled", "Your imaginary file is safe :)", "error");
		// 	  }
		// 	});
		// }

	render() {

		let triviaObj = this.props.triviaObj
		let currentPoints = this.props.totalPoints
		let opponentPoints = this.props.opponentPoints
		let allThePlayers = this.props.allThePlayers
		//let handleSubmit = this.handleSubmit
		let onButtonClick = this.onButtonClick
		let onNextButton = this.onNextButton

		let totalPlayers = allPlayers()
		console.log('the total players are ', totalPlayers)

		function whoWon(){
			console.log('hitting who won', console.log(this.props))
			if (opponentPoints > currentPoints) {
				swal({
				  title: "STOP",
				  text: "You LOST!!!",
				  imageUrl: "https://cdn1.iconfinder.com/data/icons/the-competition/450/loser-512.png"
				});
			}
			else if (opponentPoints < currentPoints) {
				swal({
				  title: "You WON!!!",
				  text: "You scored " + currentPoints + " points!!",
				  imageUrl: "https://www.safetyrevolution.co.uk/wp-content/uploads/2014/12/Safety-Competition-Winner.jpg"
				});
			}

			else if (opponentPoints === currentPoints) {
				swal({
				  title: "It's a TIE!",
				  text: "Rematch?",
				  type: "warning",
				  showCancelButton: true,
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "Yes!",
				  cancelButtonText: "No, I'm a Loser",
				  closeOnConfirm: false,
				  closeOnCancel: false
				},
				function(isConfirm){
				  if (isConfirm) {
				  	window.location.href = 'http://localhost:3001/questions';
				    //swal("Deleted!", "Your imaginary file has been deleted.", "success");
				  } else {
				    window.location.href = 'http://localhost:3001/';				  }
				});
			}


		}



			return (


				<div className='triviaBody'>
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
							<h4>
								Your Opponent: {opponentPoints}
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
						 seconds={20}
	                     color="#000"
	                     alpha={0.9}
	                     size={75}
	                     onComplete={whoWon}
	                      />
	            </div></div>
	            </div>
		)	
	}
}


/*------------------Container-------------------*/


function mapStateToProps(state) {
	return {
		triviaObj: state.gamePlay.question,
		totalPoints: state.points.points,
		opponentPoints: state.opponent.points,
		allThePlayers: state.player
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
