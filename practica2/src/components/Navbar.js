import React from 'react';
import { Link } from "react-router-dom";
import './style/Navbar.css';
import img from '../img/cnav.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-img">
                    <Link to="/">
                        <img src={img} alt="Imagen logo"></img>
                    </Link>
                </div>
                <Link className="link" to="/">
                    <h1>{this.props.titulo}</h1>    
                </Link>
                <div className="navbar-info">
                    <div className="navbar-link">
                        <Link className="link" to="/informacion">Información</Link>
                        <Link className="link" to="/about">Acerca de</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;