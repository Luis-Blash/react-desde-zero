import React from 'react';
import { Link } from "react-router-dom";
import './style/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link className="link" to="/">
                    <h1>{this.props.titulo}</h1>    
                </Link>
                <div className="navbar-info">
                    <div className="navbar-link">
                        <Link className="link" to="/juegos">Juegos</Link>
                        <Link className="link" to="/about">Acerca de</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;