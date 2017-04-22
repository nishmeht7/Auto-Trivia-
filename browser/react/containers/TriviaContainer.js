import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayingQuestion } from '../reducers/gamePlayReducer.js';
import TriviaGamePlayExtra from '../components/TriviaGamePlayExtra.js';

const mapStateToProps = (state) => ({
		somekey: state,
		questionText: 'Fastest production car?',
		questionImgUrl: 'http://robbreport.com/sites/default/files/images/articles/2015Oct/1784661//tesla-s-p90d-01.jpg',
		answer: [{answerText: 'P90D', correct: true}, {answerText: 'Corolla', correct: false}]
})

const mapDispatchToProps = (dispatch) => ({
	displayFunc: function(id){
		dispatch(displayingQuestion(id))	
	} 
})

export class TriviaContainer extends React.Component {

constructor(){
	super()
}


componentDidMount() {
	this.props.displayFunc(3);
}

render() {
	console.log('inside render', this.props)
	let savedObj = this.props.somekey; 
	return (

		<TriviaGamePlayExtra 
		myName = 'nish'
		someArr = {['test','test','test']}
		questObj = {savedObj}
		/> 

	)
}

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaContainer);

