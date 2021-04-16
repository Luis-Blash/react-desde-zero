import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Layout from './Layout';
import About from '../pages/About';
import Juegos from './Juegos';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Juegos}/>
                    <Route path="/about" component={About}/>
                    <Route component={Juegos} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;