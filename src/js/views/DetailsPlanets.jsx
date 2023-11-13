import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/index.css'

const DetailsPlanets = () => {
    const {id} = useParams()
    const {store, actions} = useContext(Context)
    const [detailPlanet, setDetailPlanet] = useState({})
    useEffect(() =>{
        actions.getPlanet(id)
        setDetailPlanet(store.onePlanet)
    }, [store.onePlanet])

    return(
        <>
        <div className="container d-flex justify-content-center mt-2">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${detailPlanet?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="mb-3">
                                <h5 className="card-title">{detailPlanet?.properties?.name}</h5>
                                <p className="card-text">{detailPlanet?.properties?.description}</p>
                                </div>
                                <div className="detail-divider mt-3 d-flex text-danger">
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Name</p>
                                        <p className="m-1 p-1">{detailPlanet?.properties?.name}</p>
                                    </div>
                                    <div className="row my-2 ">
                                        <p className="m-1 p-1 fw-bold">Climate</p>
                                        <p className="m-1 p-1">{detailPlanet?.properties?.climate}</p>
                                    </div>
                                    <div className="row my-2">
                                        <p className="m-1 p-1 fw-bold">Population</p>
                                        <p className="m-1 p-1">{detailPlanet?.properties?.population}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsPlanets