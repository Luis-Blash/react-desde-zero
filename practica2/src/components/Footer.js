import React from "react";
import { Link } from "react-router-dom";
import './style/Footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="footer">
                    <Link className="link" to="/">
                        <h1>{this.props.titulo}</h1>
                    </Link>
                    <Link className="link" to="/miportafolio">
                        <span>{this.props.quien}</span>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}