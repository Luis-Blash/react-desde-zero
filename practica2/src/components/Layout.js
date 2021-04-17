import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Navbar titulo="Castlevania"/>
            <div className="contenedor">
                {props.children}
            </div>
            <Footer titulo="Castlevania" quien="Luis Enrique"/>
        </React.Fragment>
    );
}

export default Layout;