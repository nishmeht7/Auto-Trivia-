import React from 'react';

export default class TriviaGamePlayExtra extends React.Component {

	constructor(props) {
		super()
	}


	// answerText(){
	// 	props.displayFunc()
	// }

	handleSubmit(){
		props.submitAnswer()
	}

	const questionObj = props;
	console.log('triviagameplayextra component props', questionObj);

render() {

	return (

		<div className="trivia">      
			{console.log('inside return ', questionObj)}

			{
				questionObj ?
				(
				<div>
					<h3>
						Question: { questionObj.question.questionText }
					</h3>
					<img src={ questionObj.question.questionImgUrl } className="img-thumbnail"/>
					<h3>Answer Options: </h3> 
				        {questionObj.answers.map(function(elem){
				      		return <div key={elem.id}>
							      	    <li>
							      	    	<button className="btn-info">
							      	    	{elem.answerText}
							      	    	</button>
							      	    </li>
							       </div>
					    })}
				</div>
				)
				:
				(<h3>Question: </h3>)}
		</div>
	)

}
}

