import React from "react";
import CardReviews from "../components/CardReviews";
import './style/Home.css';

export default class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="margin-left">
                    <h1>Hola Home</h1>
                    <CardReviews/>
                </div>
            </React.Fragment>
        );
    }
}