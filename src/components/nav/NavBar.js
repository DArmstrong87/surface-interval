import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// import siLogo from "../../images/si-logo.png"
// import siLogoTurtle from "../../images/si-turtle.png"

export const NavBar = () => {
	return (<>

		<div className='header'>

			<Link className="title" to="/">
				<div className="diveFlagHeader">
					{/* <img src={siLogo}/>
					<img src={siLogoTurtle}/> */}
					<img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" alt="Dive Flag"/>
					<h1 className='title'>Surface Interval</h1>
				</div>
			</Link>
			<div className="navbar">
				<ul className="navBarList">
					<li className="navbar-li">
						<Link className="navbar__link" to="/divelog">Dive Log</Link>
					</li>
					<li className="navbar-li">
						<Link className="navbar__link" to="/diveplanner">Dive Planner</Link>
					</li>
					<li className="navbar-li">
						<Link className="navbar__link" to="/gear">Gear</Link>
					</li>
					<li className="navbar-li">
						<Link className="navbar__link" to="/photo-gallery">Photo Gallery</Link>
					</li>
					<li className="navbar-li">
						<Link className="navbar__link" to="/profile">Profile</Link>
					</li>
					<li className="navbar-li">
						<Link className="navbar__link" to="#"
							onClick={
								() => {
									localStorage.removeItem("si_user")
								}
							}
						>Logout</Link>
					</li>
				</ul>
			</div>
		</div>
	</>)
}