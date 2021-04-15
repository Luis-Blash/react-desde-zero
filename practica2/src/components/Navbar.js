import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div className="navbar-img">
                    <img src="" alt="Imagen logo"></img>
                </div>
                <div className="navbar-info">
                    <h3>Creada por</h3>
                    <a href="#">Información</a>
                    <a href="#">Acerca de</a>
                </div>
            </div>
        );
    }
}

export default Navbar;