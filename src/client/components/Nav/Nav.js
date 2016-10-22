import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
	render() {
		return (
		<div className = "navWrapper">
			<div className = "linksWrapper">
				<h1><Link activeClassName = 'active' to = ''>Redux Study App</Link></h1>
				<h1><Link activeClassName = 'active' to = 'flashcards'>Flashcards</Link></h1>
				<h1><Link activeClassName = 'active' to = 'study'>Study</Link></h1>
				<h1><Link activeClassName = 'active' to = 'notes'>Notebook</Link></h1>
				<h1><Link activeClassName = 'active' to = 'posts'>Posts</Link></h1>
		  </div>
		</div>
		);
	}
};

export default Nav;
