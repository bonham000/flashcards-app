import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
	render() {
		return (
		<div className = "navWrapper">
			<div className = "linksWrapper">
				<h1><Link activeClassName = 'active' to = ''>Simple Redux App</Link></h1>
				<h1><Link activeClassName = 'active' to = 'posts'>Posts</Link></h1>
				<h1><Link activeClassName = 'active' to = 'big-counter'>Big Counter</Link></h1>
				<h1><Link activeClassName = 'active' to = 'math'>Math</Link></h1>
				<h1><Link activeClassName = 'active' to = 'notes'>Notes</Link></h1>
				<h1><Link activeClassName = 'active' to = 'add-notes'>Add Notes</Link></h1>
		  </div>
		</div>
		);
	}
};

export default Nav;
