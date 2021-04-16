import React from 'react';
import About from '../pages/About';
import Juegos from './Juegos';
import Layout from './Layout';
import Navbar from './Navbar';

const App = ()=>{
    return(
        <Layout>
            <Juegos/>
            <About/>
        </Layout>
    );
}

export default App;