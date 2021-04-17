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
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;