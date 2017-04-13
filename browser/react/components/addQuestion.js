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
			answerText: []
			
		}
		this.handleAddAnswer()
		this.handleChange = this.handleChange.bind(this);
		this.onSubmitHandle = this.onSubmitHandle.bind(this);
		this.handleAddAnswer = this.handleAddAnswer.bind(this);
	}

	handleAddAnswer(){
		this.setState({
			answerText: this.state.answerText.concat([{ name: `answerText${this.state.answerText.length}`, rightAns: '', correct: false }])
		});
		console.log('afterAdd', this.state.answerText);
	}


	handleChange(event){
		var name = event.target.name; 
		var value = event.target.value;
		if (name.indexOf('answerText') == 0){
			var newArr = this.state.answerText.concat();
			var idx = newArr.findIndex(function(elem){
				if (elem.name === name){
					return true; 
				}
			})
			console.log('index', idx)
			newArr[idx] = Object.assign({}, newArr[idx], {rightAns : value})
			this.setState({ answerText: newArr })
		}
		else {
			this.setState({
				[name]: value //this is just like obj[name] except you can use it inside the obj 
			})
		}
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
			            <div> 
				            <div className="answer">
					            <input
					            	key={idx}
					            	name={answer.name}
					                className="form-control"
					                type="text"
					                onChange={handleChange}	
					                value={this.state.answerText.rightAns}
					              />
				            </div>
					        <label>Correct?</label>            
					          <input type = "radio"
					                 name = "radSize"
					                 id = "sizeSmall"
					                 value = 'true'/>
				        </div>
		            ))}
		            <button 
		            type='button' 
		            onClick={this.handleAddAnswer} 
		            className='small'
		            >Add Answer</button><br />
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

