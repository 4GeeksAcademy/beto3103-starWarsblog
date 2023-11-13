import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom"


export const Home = () => {
	const { store } = useContext(Context)
	const { actions } = useContext(Context)
	return (
		<>
			<h1>Characters</h1>
			<div className="container my-carousel">
				{store.character.map((item) => {
					return (
						<div key={item._id} className="my-card" >
							<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="img-thumbnail" alt={item.properties.name} />
							<div className="card-body">
								<h5 className="card-title">{item.properties.name}</h5>
								<p className="card-text">
									Gender : {item.properties.gender}
									<br></br>
									Hair Color : {item.properties.hair_color}
									<br></br>
									Eye Color : {item.properties.gender}
								</p>
								<div className="d-flex justify-content-evenly">
									<Link to={`/detailCharacters/${item?.uid}`}>
										<button className="btn btn-primary">Learn more</button>
									</Link>

									<span className="">
										<i className="fa-solid fa-heart fa-2xl" onClick={() => actions.addFavorite(item)}></i>
									</span>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			<h1>Planets</h1>
			<div className="container my-carousel">
				{store.planets.map((item) => {
					return (
						<div key={item.uid} className="my-card" >
							<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="img-thumbnail" alt={item.properties.name} />
							{/* https://starwars-visualguide.com/assets/img/planets/2.jpg */}
							<div className="card-body">
								<h5 className="card-title">{item.properties.name}</h5>
								<p className="card-text">
									Population : {item.properties.population}
									<br></br>
									Name : {item.properties.name}
									<br></br>
									Terrain: {item.properties.terrain}
								</p>
								<div className="d-flex justify-content-evenly">
									<Link to={`/detailPlanet/${item?.uid}`}>
										<button className="btn btn-primary">Learn more</button>
									</Link>
									<span className="">
										<i className="fa-solid fa-heart fa-2xl" onClick={() => actions.addFavorite(item)}></i>
									</span>
								</div>
							</div>
						</div>)
				})}
			</div>
		</>

	);

}
