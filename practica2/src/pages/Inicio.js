import React from "react";
import Historia from "../components/Historia";
import Juegos from "../components/Juegos";

export default class Inicio extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Inicio">
                    <Historia/>
                </div>
            </React.Fragment>
        );
    }
}