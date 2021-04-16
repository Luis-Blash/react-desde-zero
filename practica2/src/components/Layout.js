import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Navbar titulo="Castlevania"/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;