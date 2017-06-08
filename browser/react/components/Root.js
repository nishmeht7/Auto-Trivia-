import React from 'react';
import store from '../store'




class Root extends React.Component {
	constructor() {
		super()
	}

	render () {
		const { children } = this.props
		return (
			<div>
				<nav role="navigation" className="navbar navbar-inverse">
				    <div className="navbar-header">
				        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				        </button>
				        <a href="/" className="navbar-brand">TRIVIA</a>
				    </div>
				    <div id="navbarCollapse" className="collapse navbar-collapse">
				        <ul className="nav navbar-nav">
				            <li><a href="#">Leaderboard</a></li>
				            <li className="dropdown">
				                <a data-toggle="dropdown" className="dropdown-toggle" href="#">Categories<b className="caret"></b></a>
				                <ul role="menu" className="dropdown-menu">
				                    <li><a href="#">Everything Cars</a></li>
				                    <li><a href="#">Everything React</a></li>
				                    <li><a href="#">Everything Dogs</a></li>
				                    <li className="divider"></li>
				                    <li><a href="#">Submit Your Own</a></li>
				                </ul>
				            </li>
				        </ul>
				        <ul className="nav navbar-nav navbar-right">
				            <li><a href="/addquestion">Add Questions</a></li>
				            <li><a href="#">Login</a></li>
				        </ul>
				    </div>
				</nav>
				{children}
			</div>
		)
	}
}


/*---------------Container-----------------*/

import {connect} from 'react-redux'

function mapState (state, ownProps) {
	return {}
}

function mapDispatch (dispatch, ownProps) {
	return {}
}

const RootContainer = connect(mapState, mapDispatch)(Root)

export default RootContainer
