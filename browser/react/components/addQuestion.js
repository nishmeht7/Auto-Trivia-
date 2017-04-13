import React, { Component } from 'react';
import { creatingQuestion } from '../reducers/questions.js';
import { creatingAnswer } from '../reducers/answerReducer.js';
import { Field, FieldArray, reduxForm } from 'redux-form'

import { connect } from 'react-redux';


class AddQuestion extends React.Component {


	constructor(props){
		super(props)
		this.state = {
			questionText: "",
			questionImgUrl: "",
			points: 0,
			answerText: [{rightAns: ""}],
			correct: false, 
			
		}
		this.handleChange = this.handleChange.bind(this);
		this.onSubmitHandle = this.onSubmitHandle.bind(this);
		this.handleAddAnswer = this.handleAddAnswer.bind(this);
	}

	handleAddAnswer(){
		this.setState({
			answerText: this.state.answerText.concat([{ rightAns: '' }])
		});
	}


	handleChange(event){
		var name = event.target.name; 
		var value = event.target.value; 
		this.setState({
			[name]: value //this is just like obj[name] except you can use it inside the obj 
		})
	}

	onSubmitHandle(event){
		event.preventDefault(); 
		this.props.creatingQuestion(this.state);
		//this.props.creatingAnswer(this.state);

	}

	render(){
		const handleSubmit = this.onSubmitHandle;
		const handleChange = this.handleChange;
		return (
			<div className="well">
		      <form className="form-horizontal" noValidate name="addQuestions" onSubmit={handleSubmit}>
		        <fieldset>
		          <legend>Add to Questions</legend>
		          <div className="form-group">
		            <label htmlFor="song" className="col-lg-10 control-label">Question</label>
		            <div className="col-lg-2">
			            <input
			            	name='questionText'
			                className="form-control"
			                type="text"
			                onChange={handleChange}
			                value={this.state.questionText}
			              />
		            </div>
		            <label htmlFor="song" className="col-xs-2 control-label">Question Image Url</label>
		            <div className="col-xs-10">
			            <input
			            	name="questionImgUrl"
			                className="form-control"
			                type="text"
			                onChange={handleChange}
			                value={this.state.questionImgUrl}
			              />
		            </div>
		          </div>
		          <label htmlFor="song" className="col-xs-2 control-label">Points</label>
		            <div className="col-xs-10">
			            <input
			            	name="points"
			                className="form-control"
			                type="text"
			                onChange={handleChange}
			                value={this.state.points}
			              />
			                {console.log(this.state.points)}
		            </div>
		            <label htmlFor="song" className="col-xs-2 control-label">Answer</label>
		            {this.state.answerText.map((answer, idx) => (
			            <div className="col-xs-10">
				            <input
				            	key={idx}
				            	name="answerText"
				                className="form-control"
				                type="text"
				                onChange={handleChange}
				                value={this.state.answerText}
				              />
			            </div>
		            ))}
		            <button 
		            type='button' 
		            onClick={this.handleAddAnswer} 
		            className='small'
		            >Add Answer</button>
		            <label htmlFor="song" className="col-xs-2 control-label">Correct?</label>
		            <div className="col-xs-10">
			            <select
			            	name="correct"
			                className="form-control"
			                type="text"
			                onChange={handleChange}
			                value={this.state.correct}
			             >
			             	<option>True</option>
			             	<option>False</option>
			             </select>
		            </div>
		          <div className="form-group">
		            <div className="col-xs-10 col-xs-offset-2">
		              <button type="submit" onSubmit={handleSubmit} className="btn btn-success">Add Question</button>
		            </div>
		          </div>
		        </fieldset>
		      </form>
		    </div>
		)
		
	}
}

//export default connect({form: 'addQuestions', creatingQuestion})(AddQuestion)
// AddQuestion = reduxForm({
// 	form: 'addTriviaQuestions'
// })(AddQuestion)

// AddQuestion = connect(null, { creatingQuestion })(AddQuestion)
// export default AddQuestion; 
export default connect(null, { creatingQuestion })(AddQuestion);

