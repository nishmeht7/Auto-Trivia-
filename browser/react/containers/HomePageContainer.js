import store from '../store'
import React from 'react';
import { connect } from 'react-redux';

const STYLE = {
	listStyle: {
		list: "none" 
	}
}

class HomePageContainer extends React.Component {

	constructor() {
		super()
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
				<a href="/questions" ><li>Multi-Player</li></a>
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
