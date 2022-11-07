import React, { Component } from "react";
import Cards from "./portfoliocards/cards.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="portfolio">My Projects</h2>
                <div className="projectContainer">
                {Cards.map((cardDetails, i) => {
                    return (
                        <div className="Wrapper" key={i}>
                            <h4>{cardDetails.cardname}</h4>
                            <img className="projectImg" src={cardDetails.image} alt="Project Card"/>
                            <a href={cardDetails.github}>
                                <button className="btn btn-primary">GitHub</button>
                            </a>
                            <a href={cardDetails.deployedSite}>
                                <button className="btn btn-primary">Deployed</button>
                            </a>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Portfolio;