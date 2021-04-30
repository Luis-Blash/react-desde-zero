import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="background-nav">
                    <div className="fixed-nav">
                        <div className="img-nav">
                            <img src="#" alt="imagen navbar"></img>
                        </div>
                        <div className="nav-route">
                            <Link to="/">Home</Link>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}