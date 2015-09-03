import React from 'react';
import Body from './body.js'

class Main extends React.Component {

	render() {
		return (
			<Body/>
		);
	}
}

React.render(<Main/>, document.getElementById('app'));
