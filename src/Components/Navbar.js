
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons stylesheet

// eslint-disable-next-line
import Login from './Login';

function Navbar(props)
{
	const navigate = useNavigate();

	let location = useLocation();
	useEffect(() =>
	{
		console.log(location.pathname);
	}, [location]);

	const [isExpanded, setIsExpanded] = useState(false);
	const handleToggleClick = () => 
	{
		setIsExpanded(!isExpanded);
	};

	const handleNavLinkClick = async () => 
	{
	    setIsExpanded(false);
	};

	const handleLogout = async () =>
	{
		console.log("Logout");
		handleNavLinkClick();
		navigate('/Login');
	};

	return(
		
		<nav className={` navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} ${isExpanded ? 'expanded' : ''} `} >

			<div className="container-fluid">

			    <Link className="navbar-brand" to="#" style={{ fontWeight: '600', }} > Text Analyse </Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isExpanded ? 'true' : 'false'} aria-label="Toggle navigation" onClick={handleToggleClick} >
			      	<span className="navbar-toggler-icon"></span>
			    </button>

				<div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
			      
			   	 	<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		   	 			<li className="nav-item"> 
		   	 				<Link className={`nav-link ${location.pathname === "/Home" ? "active" : ""}`} aria-current="page" to="/Home" onClick={handleNavLinkClick} style={{ color:'#FFFFFF', fontWeight: '750', fontSize: '22px' }} > Home </Link>
		   	 			</li>
			      	</ul>

					<div className={`d-flex align-items-center justify-content-evenly text-${props.mode === 'light' ? 'dark' : 'light'} `}>
					<i className="bi bi-moon"></i>
						<div className="form-check form-switch mx-2 ">
							<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style= {{ backgroundColor: '#054957' }} />
						</div>
						<i className="bi bi-moon-fill"></i>
					</div>

					<form className="d-flex" role="search">
						<Link role="button" className="btn btn-light btn-outline-danger mx-2" onClick={handleLogout} to="/"><i className="fas fa-sign-in-alt"> &nbsp; Log Out </i></Link>
					</form>

				</div>

			</div>
		</nav>
	)
}

export default Navbar;