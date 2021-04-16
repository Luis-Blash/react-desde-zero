import React from 'react';
import './style/Navbar.css';
import img from '../img/cnav.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-img">
                    <a href="#">
                        <img src={img} alt="Imagen logo"></img>
                    </a>
                </div>
                <h2>{this.props.titulo}</h2>
                <div className="navbar-info">
                    <div className="navbar-link">
                        <a className="link" href="#">Información</a>
                        <a className="link" href="#">Acerca de</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;