import React from 'react';


class addQuestion extends React.Component {


	constructor(props){
		super(props)
		this.state = {
			questionText: "",
			questionImgUrl: "",
			points: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.onSubmitHandle = this.onSubmitHandle.bind(this);
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
		this.props.creatingQuestion(this.state)
	}

	render(){
		return (
			<div className="well">
		      <form className="form-horizontal" noValidate name="addQuestions" onSubmit={handleSubmit}>
		        <fieldset>
		          <legend>Add to Questions</legend>
		          <div className="form-group">
		            <label htmlFor="song" className="col-xs-2 control-label">Question</label>
		            <div className="col-xs-10">
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
			                className="form-control"
			                type="text"
			                onChange={handleChange}
			                value={this.state.points}
			              />
		            </div>
		          <div className="form-group">
		            <div className="col-xs-10 col-xs-offset-2">
		              <button type="submit" onSubmit={onSubmitHandle} className="btn btn-success">Add Question</button>
		            </div>
		          </div>
		        </fieldset>
		      </form>
		    </div>
		)
		
	}
}

