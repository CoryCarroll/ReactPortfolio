import React, { Component } from "react";
import Cards from "./portfoliocards/cards.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/portfolio.css'
class Portfolio extends Component {
    render() {
        return (
        <div className="portfolio">
            <h2 className="header">My Projects</h2>
            <div className="container">
                <div className="projectContainer">
                {Cards.map((cardDetails, i) => {
                    return (
                        <div className=" card-containter"> 
                            <div className="card text-bg-dark" key={i}>
                                <h4 className="card-header">{cardDetails.cardname}</h4>
                                <img className="projectImg" src={cardDetails.image} alt="Project Card"/>
                                <div className="d-flex p-2 justify-content-between">
                                    <a className="m-2" href={cardDetails.github}>
                                        <button className="btn">GitHub</button>
                                    </a>
                                    <a className="m-2" href={cardDetails.deployedSite}>
                                        <button className="btn">Deployed</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        )
    }
}

export default Portfolio;