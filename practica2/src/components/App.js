import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import Layout from './Layout';
import About from '../pages/About';
import Inicio from '../pages/Inicio';
import Juegos from './Juegos';


function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Inicio}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/juegos" component={Juegos}/>
                    <Route exact path="/miportafolio" component={() =>{
                        window.location.href = 'https://luis-blash.github.io/miportafolio/';
                        return null;
                    }}/>
                    <Route component={Inicio} />
                    <Redirect from="*" to="/404/"/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;