import React, { Component } from "react";
import Header from './header';
import Footer from './footer';
import Cards from "./portfoliocards/cards.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class Portfolio extends Component {
    render() {
        return (
        <div>
            <Header/>
            <div className="container mt-5 d-flex justify-content-center">
                <h2 className="portfolio text-success">My Projects</h2>
                <div className="projectContainer">
                {Cards.map((cardDetails, i) => {
                    return (
                        <div className="container mb-3"> 
                            <div className="card border-success text-bg-dark col-sm-4" key={i}>
                                <h4 className="card-header text-success">{cardDetails.cardname}</h4>
                                <img className="projectImg" src={cardDetails.image} alt="Project Card"/>
                                <div className="d-flex p-2 justify-content-between">
                                    <a className="m-2" href={cardDetails.github}>
                                        <button className="btn btn-light btn-outline-success">GitHub</button>
                                    </a>
                                    <a className="m-2" href={cardDetails.deployedSite}>
                                        <button className="btn btn-light btn-outline-success">Deployed</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Portfolio;