import React from "react";

export default class Historia extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="historia-card">
                    <div className="historia-img">
                        <img src="" alt="Castlevania" />
                    </div>
                    <div className="historia-texto">
                        <h1>Castlevania</h1>
                        <p>
                            Castlevania (キャッスルヴァニア) es una serie de videojuegos, creada y desarrollada por Konami. Esta serie debutó en Japón con la primera versión de Akumajō Dracula (悪魔城ドラキュラ Akumajō Dorakyura) para las plataformas Famicom Disk System (FDS) y un mes después para MSX 2 en 1986. Aunque la versión de MSX 2 (que fue conocida en Europa como Vampire Killer) fue la primera versión sacada a la venta fuera de Japón, esta no fue la versión original.
                        </p>
                        <p>
                            El título occidental de la serie, Castlevania, es una mezcla de las palabras "Castle" ("castillo" en inglés) y "Transilvania" (lugar donde comúnmente transcurre el argumento de los juegos); este es el nombre del castillo del conde Drácula en los juegos de la serie. Su título oficial en japonés es Akumajō Dracula, traducido literalmente al inglés como Demon Castle Dracula (Castillo Demoníaco de Drácula). Al llegar a occidente el primer juego de la serie, se decidió renombrarlo como Castlevania, debido a que al entonces vicepresidente de Konami en América, Emil Heidkamp, no le agradaron las connotaciones religiosas del título original.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}