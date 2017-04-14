import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayingQuestion } from '../reducers/gamePlayReducer.js';

export class TriviaGamePlay extends React.Component {


	componentDidMount() {
		this.props.displayFunc(1);
	}

	render(){
		console.log('props', this.props)
		return (
		    <div className="trivia">
		      <div>
		        <h3>Question: {this.props.questionText}</h3>
		        <img src={this.props.questionImgUrl} className="img-thumbnail"/>
		      </div>
		      <h3>Answer Options: </h3> 
		      {this.props.answer.map(function(elem){
		      	return <div>
		      		<li>{elem.answerText}</li>
		      	</div>
		      })}
		    </div>
		)
	} 
  
}

const mapState = (state) => ({
		somekey: state.somekey.gamePlay,
		questionText: 'Fastest production car?',
		questionImgUrl: 'http://robbreport.com/sites/default/files/images/articles/2015Oct/1784661//tesla-s-p90d-01.jpg',
		answer: [{answerText: 'P90D', correct: true}, {answerText: 'Corolla', correct: false}]
})

const mapDispatch = (dispatch) => ({
	displayFunc: function(id){
		dispatch(displayingQuestion(id))	
	} 
})

export default connect(mapState, mapDispatch)(TriviaGamePlay);