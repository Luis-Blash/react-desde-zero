import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import Layout from './Layout';
import About from '../pages/About';
import Juegos from './Juegos';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Juegos}/>
                    <Route exact path="/about" component={About}/>
                    <Route component={Juegos} />
                    <Redirect from="*" to="/404/"/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;