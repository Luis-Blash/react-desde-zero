import React from "react";
import { Link } from "react-router-dom";
import './style/Navbar.css';
import image from '../assets/anime.png';

export default class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="background-nav">
                    <div className="navbar">
                        <div className="img-nav">
                            <Link to="/">
                                <img src={image} alt="imagen navbar"></img>
                            </Link>
                        </div>
                        <div className="nav-route">
                            <Link to="/">Home</Link>
                            <Link to="/About">About</Link>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}