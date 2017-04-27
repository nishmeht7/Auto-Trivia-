import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayingQuestion, getRandomQuestion } from '../reducers/gamePlayReducer.js';
//import TriviaGamePlayExtra from '../components/TriviaGamePlayExtra.js';


class TriviaContainer extends React.Component {

	constructor(props){
		super()
		this.onButtonClick = this.onButtonClick.bind(this)
	}

	onButtonClick(event){
		event.preventDefault()
		console.dir(event.target.attributes.value.value)
		alert(event.target.attributes.value.value)

	}

	render() {
		let triviaObj = this.props.triviaObj
		//let handleSubmit = this.handleSubmit
		let onButtonClick = this.onButtonClick
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
						<img src={ triviaObj.question.questionImgUrl } className="img-thumbnail" width="500" height="500"/>
								<h3>Choose Your Answer </h3> 
							<div className='answerFlex'>
							        {triviaObj.answers.map(function(elem){
							      		return	(<button className="answerItems btn-info">
								      	    	<span id={elem.id} value={elem.correct} onClick={onButtonClick}>{elem.answerText}</span>
								      	    	</button>)
				
								    })}
							</div>
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
		triviaObj: state.gamePlay.question
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
