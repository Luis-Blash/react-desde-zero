import React from "react";
import './style/Juegos.css';
import img from '../img/cnav.png';

export default class Juegos extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="card-juegos">
                    <div className="card-juegos-img">
                        <img src={img} alt="imagen"></img>
                    </div>
                    <div className="card-juegos-textos">
                        <h2>Titulo</h2>
                        <span>Se creo</span>
                        <a>Conocer mas</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}