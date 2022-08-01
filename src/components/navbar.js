import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src="images/logo.png" alt="" />
			</Link>
			<ul>
				<li>
					<Link to="/tech">Tech</Link>
				</li>
				<li>
					<Link to="/science">Science</Link>
				</li>
				<li>
					<Link to="/food">Food</Link>
				</li>
				<li>
					<Link to="/arts">Arts</Link>
				</li>
				<li>
					<Link to="/sports">Sports</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
