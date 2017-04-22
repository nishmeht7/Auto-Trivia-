import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayingQuestion, getRandomQuestion } from '../reducers/gamePlayReducer.js';
import TriviaGamePlayExtra from '../components/TriviaGamePlayExtra.js';

function mapStateToProps(state) {
	return {
		somekey: state
	}
}

const mapDispatchToProps = (dispatch) => ({
	// displayFunc: function(){
	// 	const thunk = getRandomQuestion();
	// 	dispatch(thunk)	
	// } 
})

export class TriviaContainer extends React.Component {

constructor(){
	super()
}


// componentDidMount() {
// 	this.props.displayFunc();
// }

//
render() {
	let savedObj = this.props.somekey.gamePlay.question; 
	

	return (

		<div className="trivia">
		      
				{console.log('inside return ', savedObj)}
				{ savedObj ? 
					(
					<div>	
						<h3>
							Question: { savedObj.question.questionText }
						</h3>
						<img src={ savedObj.question.questionImgUrl } className="img-thumbnail"/>
						<h3>Answer Options: </h3> 
					      {savedObj.answers.map(function(elem){
						      	return <div>
						      		<li>{elem.answerText}</li>
						      	</div>
						   })}
					</div>
					) : (<h3>Question: </h3>)}
		        
		       
		</div>
	)

	// return (

	// 	<TriviaGamePlayExtra 
	// 	myName = 'nish'
	// 	someArr = {['test','test','test']}
	// 	questObj = {savedObj}
	// 	/> 

	// )
}

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaContainer);

