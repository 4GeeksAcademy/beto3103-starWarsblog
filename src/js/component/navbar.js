import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store } = useContext(Context)
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">STAR WARS</span>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#">Features</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites {store.favorites.length}
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									{/* <li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li> */}
									{
										store.favorites.map((item) => {
											return (
												<li key={item.id}>
													<Link className="dropdown-item">
														{item.properties.name}
													</Link>
												</li>
											)
										})
									}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>

	);
};
