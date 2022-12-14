import { NavLink } from 'react-router-dom';

function Navigation() { 
	return (
		<nav className="headerNavigation">
			<ul className="nav">
				<li className="nav-item">
					<NavLink className="nav-link App-link" to="/">Home</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link App-link" to="/page">Page</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link App-link" to="/wprestapi">WP Rest API</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link App-link" to="/todo">ToDo</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation