import React from 'react';

export default function TriviaGamePlayExtra(props) {

	console.log('component props', props);
	const quest = props.questObj.gamePlay.question;
	console.log('quest', quest);
	// console.log('state', state)

	return (

		<div className="trivia">
		      <div>
				{console.log('inside return ', props)}
		        <h3>Question: {props.myName}</h3>
		        <img src={props.myName} className="img-thumbnail"/>
		      </div>
		      <h3>Answer Options: </h3> 
		      {props.someArr.map(function(elem){
		      	return <div>
		      		<li>{elem}</li>
		      	</div>
		      })}
		</div>
	)
}