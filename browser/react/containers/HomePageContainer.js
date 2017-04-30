import store from '../store'
import React from 'react';
import { connect } from 'react-redux';


class HomePageContainer extends React.Component {

	constructor() {
		super()
	}



	render () {
		
		return (

			
			<div id="body">
				<div>
				<a href="/questions" className="shinyContainer">
				  Are You Ready?
				  <i></i>
				</a>
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
