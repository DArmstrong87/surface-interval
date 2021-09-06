import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
	return (<>

		<div className='header'>
			<h1 className='title'>Surface Interval</h1>
		</div>
		<ul className="navbar">
			<li className="navbar__item active">
				<Link className="navbar__link" to="/">Home</Link>
			</li>
			<li className="navbar__item active">
				<Link className="navbar__link" to="/divelog">Dive Log</Link>
			</li>
			<li className="navbar__item active">
				<Link className="navbar__link" to="/gear">Gear</Link>
			</li>
			<li className="navbar__item active">
				<Link className="navbar__link" to="/profile">Profile</Link>
			</li>
			<li className="navbar__item active">
				<Link className="navbar__link" to="/profile">Logout</Link>
			</li>
		</ul>
	</>)
}