import React, { Component } from "react";
import Cards from "./portfoliocards/cards.json";

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="portfolio">Portfolio</h2>
                <div className="projectContainer">
                {Cards.map((cardDetails, i) => {
                    return (
                        <div>
                            <h4></h4>
                            <img src="" alt=""></img>

                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}