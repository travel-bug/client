import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from '../Logo/bug_icon.png';
import SearchBtn from "../../images/search_arrow.png";
import Avatar from "../../images/avatar.png";

class Navbar extends Component {
	render() {
	return (
		<nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url(${this.props.backgroundImage})` }}>
		<div className="nav-links">
			<ul className="navbar-nav">
				<li className="nav-item logo">
					<Link className="navbar-brand" to="/">
						<img src={Logo} className="logo" alt="Logo"></img>
					</Link>
				</li>
				<li className="nav-item home">
					<Link
						to="/"
						className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
					>
						home
					</Link>
				</li>
				<li className="nav-item see">
					<Link
						to="/see"
						className={window.location.pathname === "/see" ? "nav-link active" : "nav-link"}
					>
						see
					</Link>
				</li>
				<li className="nav-item do">
					<Link
						to="/do"
						className={window.location.pathname === "/do" ? "nav-link active" : "nav-link"}
					>
						do
					</Link>
				</li>
				<li className="nav-item eat">
					<Link
						to="/eat"
						className={window.location.pathname === "/eat" ? "nav-link active" : "nav-link"}
					>
						eat
					</Link>
				</li>
				<div className="search">
					<input className="form-control mr-sm-2" type="search" placeholder={this.props.placeholder} aria-label="Search"></input>
				</div>
				<div className="search-btn">
					<input className="arrow" type="image" src={SearchBtn} alt="Image missing..."></input>
				</div>
				<li className="nav-item login">
					<Link
						to="/login"
						className={window.location.pathname === "/login" ? "nav-link active login" : "nav-link login"}
					>
						login/sign up
						
					</Link>
				</li>
				<div className="avatar-div">
					<img className="avatar-img" src={Avatar} alt="Avatar"></img>
				</div>
			</ul>
		</div>
	</nav>
	);
	}
}

export default Navbar;