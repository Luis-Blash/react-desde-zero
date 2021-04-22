import React from "react";
import './style/Juegos.css';

export default class Juegos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: require('../api/datos.json')
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid-juegos">
                    {this.state.list.map((element) => {
                        return (
                            <div key={element.id} className="card-juegos">
                                <div className="card-juegos-textos">
                                    <h2>{element['titulo']}</h2>
                                    <span>{element['fecha_creacion']}</span>
                                    <p>{element['descripcion']}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
}