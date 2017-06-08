import store from '../store'
import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert'

const STYLE = {
	listStyle: {
		list: "none" 
	}
}

class HomePageContainer extends React.Component {

	constructor() {
		super()
		this.onMultiPlayerClick = this.onMultiPlayerClick.bind(this);
	}

	onMultiPlayerClick(event) {
		event.preventDefault();
		console.log('clicking on multiplayer');
		swal({
			  title: "GearHead Name?",
			  text: "Give your player a name:",
			  type: "input",
			  showCancelButton: true,
			  closeOnConfirm: false,
			  animation: "slide-from-top",
			  inputPlaceholder: "Write something"
			},
			function(inputValue){
			  if (inputValue === false) return false;	  
			  if (inputValue === "") {
			    swal.showInputError("You need to write something!");
			    return false
			  }	  
			  swal({title: "Welcome "+inputValue+"!", text: "Waiting for another player to join", imageUrl: "http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"});
			  //swal("Nice!", "You wrote: " + inputValue, "success");
			});
	}

	render () {
		
		return (

			
			<div className="homeBody">
				<div>
					<span className="shinyContainer">
					  Pick Your Game
					  <i></i>
						<ul className="ulStyle" style={{listStyleType: "none"}}>
							<a href="/singleplayer" ><li>Single Player</li></a>
							<a href="/questions" onClick={this.onMultiPlayerClick}><li>Multi-Player</li></a>
						</ul>
					</span>
				</div>
			</div>

		)
	}
}


/*------------------Container-------------------*/


function mapStateToProps(state) {

}

const mapDispatchToProps = (dispatch) => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
